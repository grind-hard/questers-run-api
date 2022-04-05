export interface Location {
	x: number
	y: number
	z: number
}

export interface Place {
	id: string
  title: string
  description: string
	zoneId: string
	location: Location 

}

export interface City extends Place {
	hasBlacksmith: boolean
	hasShop: boolean

}

export interface Cave extends Place {

}
