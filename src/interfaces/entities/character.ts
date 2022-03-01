import { EntityBase } from './entites.base'

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

export interface Gender extends EntityBase {

}

export interface Equipment extends EntityBase {
  armorIds: string[]
  weaponIds: string[]
}
