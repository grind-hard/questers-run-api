import { EntityBase } from '../entites.base'

export interface SkillCategory extends EntityBase {
  classRestrictionIds?: string[]
}

export interface Skill extends EntityBase {
  skillCategoryId: string
  effectIds: string[]
}
