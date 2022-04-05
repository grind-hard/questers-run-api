import { BaseEntity } from './entities.base'

export interface Zone extends BaseEntity {
	worldId: string
	environment: ZoneEnvironments 
}

export type ZoneEnvironments = 'desert' | 'forest' | 'mountains' | 'tundra'
