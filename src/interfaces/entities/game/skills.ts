import { EntityBase } from '../entities.base'

/**
 * A skill category limits skills certain classes.
 */
export interface SkillCategory extends EntityBase {
  restrictedClassIds?: string[]
}

/**
 * A Skill applies effects to the entity.
 */
export interface Skill extends EntityBase {
  /** The Skill Category Id associated with the skill. */
  skillCategoryId: string
  /** The effects associated with the skill. */
  effectIds: string[]

  /** Todo: More skill properties. */
}
