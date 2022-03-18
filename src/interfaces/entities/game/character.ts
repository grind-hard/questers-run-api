import { EntityBase } from '../entities.base'
import { Points } from './points'

/**
 * A Character is a player controlled entity.
 * A Character can move between worlds and universes.
 */
export interface Character {
  /** The unique identifier of the character. */
  id: string
  /** The user identifier associated with the character. */
  userId: string
  /** The name of the character as defined by the user. */
  name: string
  /** The age of the character as defined by the user, if at all. */
  age?: number
  /** The gender(s) of the character as defined by the user, if at all. */
  genderIds?: string[]
  /** The level of the charcter in its current state. */
  level: number
  /** The class identifier of the character as defined by the user. */
  classId: string
  /** The equipment identifiers associated to the characeter. For saved equipment sets. */
  savedEquipmentIds: string[]
  /** The character's currently assigned equipment identifier. */
  equipmentId: string
  /** The weapon identifiers currently equipped to the character. */
  weaponIds: string[]
  /** The stats identifier associated with the character. */
  statsId: string
  /** The points associated to the character such as health, mana, stamina, etc... */
  points: Points[]
  titleId?: string
}

export interface Gender extends EntityBase {

}

export interface Equipment extends EntityBase {
  armorIds: string[]
  weaponIds: string[]
}
