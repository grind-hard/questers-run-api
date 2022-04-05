import { BaseEntity } from './entities.base'

export interface Location {
	x: number
	y: number
	z: number
}

export interface Place extends BaseEntity {
	zoneId: string
}

export interface City {
	zoneId: string
	location: Location 
	hasBlacksmith: boolean
	hasShop: boolean

}

export interface Cave {
	zoneId: string
	location: Location

}
