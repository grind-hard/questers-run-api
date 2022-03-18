import { Effects } from './effects'
import { EntityBase } from '../entities.base'

export interface Weapon extends EntityBase {
  weaponTypeId: string
  levelRequirement: number
  effects: Effects[]
}

export interface WeaponType extends EntityBase {

}
