import { EntityBase } from './entites.base'
/**
 * The Stat is like a character sheet that can be saved.
 */
export interface Stat extends EntityBase {
  strength?: number
  agility?: number
  courage?: number
  willpower?: number
  wisdom?: number
  tenacity?: number
  determination?: number

  [propertyName: string]: any
}
