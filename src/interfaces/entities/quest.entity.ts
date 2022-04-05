import { BaseEntity } from './entities.base'

export interface QuestLine extends BaseEntity {

}

export interface Quest extends BaseEntity {
	questLineId: string
	questStepIds: string[]

}

export interface QuestStep extends BaseEntity {
	questId: string

}
