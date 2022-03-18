import { EntityBase } from '../entities.base'
import { Points } from './points'
import { Stats } from './stats'

/**
 * Effects determine changes to the target or self (character/mob).
 */
export interface Effects extends EntityBase {
  /** The Points applied to the character. */
  self?: Points
  /** The Points applied to the target. */
  target?: Points
  /** The Stats applied to the character.  */
  stats?: Stats
  /** The chance that the effect will occur. */
  chance: number
}
