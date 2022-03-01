import { RelativeUser } from '../relations'

export interface User extends RelativeUser {
  email: string
  phone: string
  authentication: string
  twoFactor: boolean
  lastLoginOn: string
  createdOn: string
  username: string
  universeIds?: string[]
  characterIds?: string[]
}
