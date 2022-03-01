export interface Character {
  id: string
  userId: string
  name: string
  age: number
  genderId: string
  level: number
  classId: string
  savedEquipmentIds: string[]
  equipmentId: string
  weaponIds: string[]
  statsId: string
}

export interface Gender {
  id: string
  title: string
  description: string
}

export interface Equipment {
  id: string
  description: string
  armorIds: string[]
  weaponIds: string[]
}
