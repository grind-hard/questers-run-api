import { azure, createPromiseTableService, PromiseTableService } from 'azure-table-promise'
import { BlockBlobService, TableWriterBatch } from 'azure-utils'
import { World } from './world.entity'
import { isNotNullAndNotUndefined, isNullOrUndefined } from 'nhs-core-utils'
import { Tables } from '../common/common.constants'
import { WorldTableRow } from './world.data.interfaces'
import { DeleteResponse, InvalidRequestResult } from '../common/common.interfaces'
import { createHash } from 'crypto'

export class WorldService {
  private readonly blockBlobService: BlockBlobService
  private readonly tableService: PromiseTableService
  private readonly connection: string
  private tableWriterBatch: TableWriterBatch

  constructor(connection: string){
    this.connection = connection
    this.blockBlobService = new BlockBlobService(connection)
    this.tableWriterBatch = new TableWriterBatch({connection})
    this.tableService = createPromiseTableService(connection)
  }
  
  async doGet (queryParams?: World): Promise<WorldTableRow[]> {
    const query = new azure.TableQuery().select()
    if(isNotNullAndNotUndefined(queryParams)){
      let isFirstParameter = true
      for(const propertyName of Object.getOwnPropertyNames(queryParams)){
        if(isFirstParameter){
          query.where(`${propertyName} eq ?`, queryParams[propertyName])
          isFirstParameter = false
        } else {
          query.and(`${propertyName} eq ?`, queryParams[propertyName])
        }
      }
    }

    const queryResult = await this.tableService.queryEntitiesAll<WorldTableRow>(Tables.World, query, {resolveEntity: true})
    return queryResult.entries
  }

  async doPost (worldTableRows: WorldTableRow[]): Promise<WorldTableRow[]> {
    if(isNullOrUndefined(worldTableRows) || worldTableRows.length === 0) return undefined

    for(const worldTableRow of worldTableRows){
      if(isNullOrUndefined(worldTableRow.PartitionKey)){
        worldTableRow.PartitionKey = 'world'
      }

      if(isNullOrUndefined(worldTableRow.RowKey)){
        const worldId = createHash('sha256').update(`${worldTableRow.title}${Date.now()}`).digest('hex')
        worldTableRow.RowKey = encodeURIComponent(worldId)
        worldTableRow.id = worldId
      }
    }

    this.tableWriterBatch = new TableWriterBatch({connection: this.connection})
    this.tableWriterBatch.addTableWriter({
      tableName: Tables.World,
      tableRows: worldTableRows
    })
    await this.tableWriterBatch.executeBatches()

    return worldTableRows
  }

  async doDelete (entityIds: string[]): Promise<DeleteResponse> {
    if(isNullOrUndefined(entityIds) || !Array.isArray(entityIds) || entityIds.length === 0) return undefined

    const query = new azure.TableQuery().select()
    let isFirstId = true
    for(const entityId of entityIds){
      if(isFirstId){
        query.where('RowKey eq ?', entityId)
        isFirstId = false
      } else {
        query.or('RowKey eq ?', entityId)
      }
    }

    const queryResult = await this.tableService.queryEntitiesAll<WorldTableRow>(Tables.World, query, {resolveEntity: true})
    const worlds: WorldTableRow[] = queryResult.entries

    const missingIds: string[] = []
    for(const entityId of entityIds){
      const foundWorld: World = worlds.find(w => w.id === entityId)
      if(isNullOrUndefined(foundWorld)){
        missingIds.push(entityId)
      }
    }

    this.tableWriterBatch = new TableWriterBatch({connection: this.connection})
    this.tableWriterBatch.addTableWriter({
      tableName: Tables.World,
      tableRows: worlds,
      writeType: 'delete'
    })
    await this.tableWriterBatch.executeBatches()

    return {
      missingIds
    }
  }
}
