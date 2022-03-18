import { EntityBase } from '../entities.base'

/**
 * Points determine entity health, mana, and stamina.
 */
export interface Points extends EntityBase{
	/** Number of health points. */
	health: number
	/** Number of mana points. */
	mana?: number
	/** Number of stamina points. */
	stamina: number
}
