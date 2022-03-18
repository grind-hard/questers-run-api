import { Effects } from './effects'
import { EntityBase } from '../entities.base'

export interface Weapon extends EntityBase {
  weaponTypeId: string
  levelRequirement: number // the user level required to obtain the weapon
  baseattack: number // the base rate of attack, in damage done, when no effects are applied, and itemlevel is default
  itemLevel: number // power level of the weapon, used in a equation with baseattack to determine damage caused
  effects: Effects[] // an array of effects applied to the weapon permanently
}

export interface WeaponType extends EntityBase {

}
