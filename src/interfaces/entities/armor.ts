import { EntityBase } from './entites.base'

export interface Armor extends EntityBase {
  value: number
  durability: number
  levelRequirement: number
  price: number
  type: ArmorTypeClassification
  slot: SlotTypeClassification
}

export interface ArmorTypeClassification extends EntityBase {

}

export interface SlotTypeClassification extends EntityBase {

}
