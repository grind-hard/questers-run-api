import { EntityBase } from '../entities.base'

export interface SkillCategory extends EntityBase {
  classRestrictionIds?: string[]
}

export interface Skill extends EntityBase {
  skillCategoryId: string
  effectIds: string[]
}
