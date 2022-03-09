import { azure, PromiseTableService } from 'azure-table-promise'
import { BlockBlobService, TableOperation, TableWriterBatch } from 'azure-utils'
import { isNotNullAndNotUndefined } from 'nhs-core-utils'
import { v3, v4 } from 'uuid'
import { Tables, Containers } from '../../common/azure.entities'
import { EnVar } from '../../common/common.statics'
import { User } from '../../interfaces/entities/user'
import { ControllerBase } from '../common/controller.interfaces'
import { hashValue } from './user.http.service'
import { UsersTableRow } from './user.interfaces'

export class DefaultUserController implements ControllerBase<User> {
  private blockBlobService: BlockBlobService
  private tableWriterBatch: TableWriterBatch
  private promiseTableService: PromiseTableService

  constructor (azureConnectionString: string) {
    this.blockBlobService = new BlockBlobService(azureConnectionString)
    this.promiseTableService = new PromiseTableService(azureConnectionString)
  }

  async doPost (filters: any): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

  async doGet (): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entity: User): Promise<User> {
    if(await this.exists(entity)) return
    entity.salt = v3(entity.username, v4())
    entity.id = hashValue(entity.username, entity.salt)
    entity.password = hashValue(entity.password, entity.salt)
    entity.authentication = v4()
    entity.authenticated = false
    return await this.execute(entity, 'merge')
  }

  async doPatch (entity: User): Promise<User> {
    entity.id = hashValue(entity.username, entity.salt)
    entity.password = hashValue(entity.password, entity.salt)
    return await this.execute(entity, 'merge')
  }

  async doDelete (entity: User): Promise<{success: boolean, messages: string[]}> {
    if (!await this.exists(entity)) {
      return {
        success: false,
        messages: ['Record not found.']
      }
    }

    await this.execute(entity, 'delete')

    return {
      success: true,
      messages: ['Successful delete operation.']
    }
  }

  private async exists (entity: User): Promise<boolean> {
    const query = new azure.TableQuery().select().where('username eq ?', entity.username)
    const results = await this.promiseTableService.queryEntitiesAll<UsersTableRow>(Tables.Users, query, { resolveEntity: true })
    const records: UsersTableRow[] = results.entries
    return this.hasOneRecordMatchingIds(records, entity.id)
  }

  async credentialsMatch(entity: User): Promise<boolean> {
    const query = new azure.TableQuery().select().where('username eq ?', entity.username)
    const results = await this.promiseTableService.queryEntitiesAll<UsersTableRow>(Tables.Users, query, { resolveEntity: true })
    const records: UsersTableRow[] = results.entries
    if(records.length <= 0) return false
    if(records.length > 1) return false
    return records[0].password === entity.password
  }

  private hasOneRecordMatchingIds(records: UsersTableRow[], entityId: string){
    return isNotNullAndNotUndefined(records) && records.entries.length === 1 && records[0].RowKey === entityId
  }

  private async execute (entity: User, writeType: TableOperation): Promise<User> {
    const dataPath = `${entity.id}.json`

    if (writeType === 'delete') {
      await this.blockBlobService.delete(Containers.Users, dataPath)
    } else {
      await this.blockBlobService.write(Containers.Users, dataPath, entity)
    }

    const usersTableRow: UsersTableRow = {
      PartitionKey: 'users',
      RowKey: entity.id,
      salt: entity.salt,
      dataPath: dataPath,
      password: entity.password,
      username: entity.username
    }

    this.tableWriterBatch = new TableWriterBatch({ connection: process.env[EnVar.StorageAccount] })
    this.tableWriterBatch.addTableWriter({
      tableName: Tables.Users,
      tableRows: [usersTableRow],
      writeType
    })
    await this.tableWriterBatch.executeBatches()

    return entity
  }
}
