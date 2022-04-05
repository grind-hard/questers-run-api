import { BaseEntity } from './entities.base'

export interface Location {
	x: number
	y: number
	z: number
}

export interface Place extends BaseEntity {
	zoneId: string
	location: Location 

}

export interface City extends Place {
	hasBlacksmith: boolean
	hasShop: boolean

}

export interface Cave extends Place {

}
