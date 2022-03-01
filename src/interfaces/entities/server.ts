import { EntityBase } from './entites.base'

export interface Server extends EntityBase {
  qrId: string
  ip: string
  port: string
  adminIds: string[]
}
