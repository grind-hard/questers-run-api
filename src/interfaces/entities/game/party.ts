import { EntityBase } from '../entities.base'

/**
 * A Party associates many characters to a single party.
 */
export interface Party extends EntityBase {
  /** The characters associated with a party. */
  characterIds: string[]
}
