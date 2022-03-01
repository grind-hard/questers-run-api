import { EntityBase } from './entites.base'
import { Points } from './points'

export interface Character {
  id: string
  userId: string
  name: string
  age?: number
  genderIds?: string[]
  level: number
  classId: string
  savedEquipmentIds: string[]
  equipmentId: string
  weaponIds: string[]
  statsId: string
  points: Points
  titleId?: string
}

export interface Gender extends EntityBase {

}

export interface Equipment extends EntityBase {
  armorIds: string[]
  weaponIds: string[]
}

export interface Title extends EntityBase {

}
