import { LegacyTableRow } from 'azure-utils'
import { World } from './world.entity'

/**
 * PartitionKey = server/owner name
 * RowKey = world id
 */
export interface WorldTableRow extends LegacyTableRow, World {

}
