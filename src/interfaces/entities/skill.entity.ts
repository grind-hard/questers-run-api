export interface Skill {
  id: string
  title: string
  description: string
  damage: number
  damageType: SkillDamageType
  heal: number
  hasAoe: boolean
}

export type SkillDamageType = 'magic' | 'physical'
