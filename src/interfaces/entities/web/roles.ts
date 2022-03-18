import { EntityBase } from '../entities.base'

export interface Role extends EntityBase {
  canManage: {
    servers: string[]
    users: boolean
    creative: boolean
  }
}
