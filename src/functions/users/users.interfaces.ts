import { LegacyTableRow } from 'azure-utils'
import { User } from '../../interfaces/entities/user'
import { HttpResponseBodyBase } from '../common/response.interfaces'

export interface UsersHttpResponseBody extends HttpResponseBodyBase {
  success: boolean
  messages: string[]
  users: User[]
}

/**
 * PartitionKey: 'users',
 * RowKey: ${user.id}
 */
export interface UsersTableRow extends Readonly<LegacyTableRow> {
  passwordHash: string
  salt: string
  dataPath: string
}

export interface UsersPostFilters {
  userIds?: string[]
  loginDateTime?: string
  createdDateTime: string
  active: boolean
}
