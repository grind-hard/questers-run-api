import { EntityBase } from '../entities.base'
import { Stats } from './stats'

/**
 * A Weapon definition used through the game and can be used by entities that meet the requirements.
 */
export interface Weapon extends EntityBase {
  /** The Weapon Type identifier associated with the weapon. eg. Mace */
  weaponTypeId: string
  /** Flag to determine if the weapon requires two hands to wield. */
  twoHanded: boolean
  /** Flag to determine if the weapon can be used in ranged combat. */
  ranged: boolean
  /** The requirements to equip the weapon. */
  requirements: WeaponRequirements
  /** The base damage the weapon deals. */
  damage: number
  /** The base speed the weapon attacks. */
  speed: number
  /** The power level of the weapon. */
  itemLevel: number
  /** The effects of the weapon. */
  effectIds: string[]
}

/**
 * Weapon Type describes different kinds of weapons. eg. Mace, Sword, Stave, Pistol, Shotgun, etc...
 */
export interface WeaponType extends EntityBase {

}

/**
 * The Weapon Requirements determine values needed to equip onto an entity.
 */
export interface WeaponRequirements extends EntityBase {
  /** The level the entity needs to be. */
  level: number
  /** The stats the entity needs to have. */
  stats: Stats
}
