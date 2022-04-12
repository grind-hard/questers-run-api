import { azure, PromiseTableService } from 'azure-table-promise'
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
    this.blockBlobService = new BlockBlobService(connection)
    this.tableWriterBatch = new TableWriterBatch({connection})
    this.tableService = new PromiseTableService(connection)
  }
  
  async doGet (queryParams?: World): Promise<WorldTableRow[] | InvalidRequestResult> {
    const query = new azure.TableQuery().select()
    if(isNotNullAndNotUndefined(queryParams)){
      let isFirstParameter = true
      for(const propertyName of Object.getOwnPropertyNames(queryParams)){
        if(isFirstParameter){
          query.where(`${propertyName} eq ?`, queryParams[propertyName])
          isFirstParameter = false
        } else {
          query.and(`${propertyName} eq ? `, queryParams[propertyName])
        }
      }
    }

    let queryResult: any
    try {
      queryResult = await this.tableService.queryEntitiesAll<WorldTableRow>(Tables.World, query, {resolveEntity: true})
    } catch(error){
      return {
        errors: [{
          message: 'WorldService.doGet - Failed to PromiseTableService.queryEntitiesAll.',
          error
        }]
      }
    }

    return queryResult.entries
  }

  async doPost (worldTableRows: WorldTableRow[]): Promise<WorldTableRow[] | InvalidRequestResult> {
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

    try {
      await this.tableWriterBatch.executeBatches()
    } catch(error){
      return {
        errors: [{
          message: 'WorldService.doPost - Failed to TableWriterBatch.executeBatches.',
          error
        }]
      }
    }

    return worldTableRows
  }

  async doDelete (entityIds: string[]): Promise<DeleteResponse | InvalidRequestResult> {
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

    let queryResult: any
    
    try {
      queryResult = await this.tableService.queryEntitiesAll<WorldTableRow>(Tables.World, query, {resolveEntity: true})
    } catch(error){
      return {
        errors: [{
          message: 'WorldService.doDelete - Failed to PromiseTableService.queryEntitiesAll.',
          error
        }]
      }
    }

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

    try {
      await this.tableWriterBatch.executeBatches()
    } catch(error){
      return {
        errors: [{
          message: 'WorldService.doDelete - Failed to TableWriterBatch.executeBatches.',
          error
        }]
      }
    }

    return {
      missingIds
    }
  }
}
