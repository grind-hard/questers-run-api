import { BaseEntity } from './entities.base'

export interface NPC extends BaseEntity {
	greeting: string
	givesQuests: boolean
	questLineIds: string
}

export interface Blacksmith extends NPC {
	canRepair: boolean

}
