import { Skill } from './skills'

export interface Class {
  id: string
  title: string
  description: string
  skillIds?: string[]
}
