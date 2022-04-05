import { LegacyTableRow } from 'azure-utils'
import { BaseEntity } from '../entities/entities.base'

/**
 * PartitionKey is world type. (creative, normal, etc...)
 * RowKey is the world's name (uri encoded)
 */
 export interface WorldTableRow extends Readonly<LegacyTableRow>, BaseEntity {

}