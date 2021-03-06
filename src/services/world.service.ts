import { World } from '../interfaces/entities/world.entity'
import { BaseApiService } from './service.base'

export class WorldService implements BaseApiService<World> {
	doGet(queryParams?: World): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doPatch(entities: World[]): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doPut(entities: World[]): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doPost(entities: World[]): Promise<World[]> {
		throw new Error('Method not implemented.')
	}
	doDelete(entityIds: string[]): Promise<string[]> {
		throw new Error('Method not implemented.')
	}

}