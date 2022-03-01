import { Effects } from '../common'
import { EntityBase } from './entites.base'

export interface Weapon extends EntityBase {
  weaponTypeId: string
  levelRequirement: number
  effects: Effects[]
}

export interface WeaponType extends EntityBase {

}
