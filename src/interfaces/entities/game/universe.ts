import { EntityBase } from '../entites.base'

/**
 * There can be many Universes on a single server.
 * Universes may connect with each other for various activities.
 * A Universe can have many Worlds.
 */
export interface Universe extends EntityBase {
	/** The child world ids associated with the Universe. */
	worldIds: string[]
	/** Related Universes to this one. */
	siblingUniverseIds: string[]
}
