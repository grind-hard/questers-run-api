import { BaseEntity } from './entities.base'

export interface World {
	id?: string
	title: string
	description: string
}

export interface Worlds {
	worlds: World[]
}
