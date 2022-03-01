
export interface Armor {
  id: string
  title: string
  descripton: string
  value: number
  durability: number
  levelRequirement: number
  price: number
  type: ArmorTypeClassification
  slot: SlotTypeClassification
}

export interface ArmorTypeClassification {
  id: string
  title: string
  description: string
}

export interface SlotTypeClassification {
  id: string
  title: string
  description: string
}
