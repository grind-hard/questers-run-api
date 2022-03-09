import { azure, PromiseTableService } from 'azure-table-promise'
import { BlockBlobService, TableOperation, TableWriterBatch } from 'azure-utils'
import { isNotNullAndNotUndefined } from 'nhs-core-utils'
import { v3 } from 'uuid'
import { Tables, Containers } from '../../common/azure.entities'
import { EnVar } from '../../common/common.statics'
import { User } from '../../interfaces/entities/user'
import { ControllerBase } from '../common/controller.interfaces'
import { hashValue } from './users.http.service'
import { UsersTableRow } from './users.interfaces'

export class DefaultUsersController implements ControllerBase<User> {
  blockBlobService: BlockBlobService
  tableWriterBatch: TableWriterBatch
  promiseTableService: PromiseTableService

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
    if(!this.exists(entity)) return
    entity.id = v3(entity.username, 'user')
    entity.password = hashValue(entity.password)
    return await this.execute(entity, 'merge')
  }

  async doPatch (entity: User): Promise<User> {
    entity.password = hashValue(entity.password)
    return await this.execute(entity, 'merge')
  }

  async doDelete (entity: User): Promise<{success: boolean, messages: string[]}> {
    if (this.exists(entity)) {
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
    const query = new azure.TableQuery().select().where('RowKey eq ?', entity.id)
    const results = await this.promiseTableService.queryEntitiesAll<UsersTableRow>(Tables.Users, query, { resolveEntity: true })
    const records: UsersTableRow[] = results.entries
    return this.hasOneRecordMatchingIds(records, entity.id)
  }

  private async credentialsMatch(entity: User): Promise<boolean> {
    const query = new azure.TableQuery().select().where('username eq ?', entity.username).and('password eq ?', entity.password)
    const results = await this.promiseTableService.queryEntitiesAll<UsersTableRow>(Tables.Users, query, { resolveEntity: true })
    const records: UsersTableRow[] = results.entries
    return this.hasOneRecordMatchingIds(records, entity.id)
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
      passwordHash: entity.password
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
