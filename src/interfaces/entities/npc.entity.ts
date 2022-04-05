import { BaseEntity } from './entities.base'

export interface NPC extends BaseEntity {
	greeting: string
	questLineIds: string
	
}

export interface Blacksmith extends NPC {
	canRepair: boolean

}
