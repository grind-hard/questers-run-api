import { User } from '../../interfaces/entities/user'
import { HttpResponseBodyBase } from '../common/response.interfaces'

export interface UsersHttpResponseBody extends HttpResponseBodyBase {
  success: boolean
  messages: string[]
  users: User[]
}

export interface UsersPostFilters {
  userIds?: string[]
  loginDateTime?: string
  createdDateTime: string
  active: boolean
}
