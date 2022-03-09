import { LegacyTableRow } from 'azure-utils'

/**
 * PartitionKey: 'users',
 * RowKey: ${user.id}
 */
export interface UsersTableRow extends Readonly<LegacyTableRow> {
  username: string
  password?: string
  salt?: string
  dataPath: string
  serverIds?: string[]
}
