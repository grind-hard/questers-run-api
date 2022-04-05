import { World } from '../interfaces/entities/world.entity'
import { BaseApiService } from './service.base'

export class WorldService implements BaseApiService<World> {
	doGet(queryParams: World): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doPatch(objects: World[]): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doPut(objects: World[]): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doPost(objects: World[]): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doDelete(objectIds: string[]): Promise<string[]> {
		throw new Error('Method not implemented.')
	}

}