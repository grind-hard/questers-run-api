import { Effects } from '../common'

export interface SkillCategory {
  id: string
  title: string
  description: string
  classRestrictionIds?: string[]
}

export interface Skill {
  id: string
  skillCategoryId: string
  title: string
  description: string
  effectIds: string[]
}
