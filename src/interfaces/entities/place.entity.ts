export interface Location {
	x: number
	y: number
	z: number
}
export interface City {
	id: string
	zoneId: string
  title: string
  description: string
	location: Location
	hasBlacksmith: boolean
	hasShop: boolean

}

export interface Cave {
	id: string
	zoneId: string
  title: string
  description: string
	location: Location
	hasLoot: boolean

}
