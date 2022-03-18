import { EntityBase } from '../entities.base'

/**
 * Armor is meant for Characters, NPCs, Mobs, and Bosses.
 */
export interface Armor extends EntityBase {
  /** Armor value. Negates incoming physical damage. */
  value: number
  /** The total durability of the armor. */
  totalDurability: number
  /** The current durability of the armor. */
  durability: number
  /** The character level requirement to equip the armor. */
  levelRequirement: number
  /** The price of the armor when selling to a vendor. */
  price: number
  /** The armor's type. */
  type: ArmorTypeClassification
  /** The slot the armor is equipped to. */
  slot: SlotTypeClassification
}

/** Customizable armor types. */
export interface ArmorTypeClassification extends EntityBase {

}

/** Customizable armor slot types. eg. Head, Neck, etc... */
export interface SlotTypeClassification extends EntityBase {

}
