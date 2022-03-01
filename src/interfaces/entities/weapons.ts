import { Effects } from '../common'

export interface Weapon {
  id: string
  weaponTypeId: string
  title: string
  description: string
  levelRequirement: number
  effects: Effects[]
}

export interface WeaponType {
  id: string
  title: string
  description: string
}
