import { BaseEntity } from './entities.base'

export interface Place extends BaseEntity {
	zoneId: string
}

export interface City extends Place {
	hasBlacksmith: boolean
	hasRepair: boolean
	hasShop: boolean

}

export interface Interior extends BaseEntity {
	parentId: string
	
}


