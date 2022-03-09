import { LegacyTableRow } from 'azure-utils'

/**
 * PartitionKey: 'users',
 * RowKey: ${user.id}
 */
export interface UsersTableRow extends Readonly<LegacyTableRow> {
  passwordHash?: string
  salt?: string
  dataPath: string
}
