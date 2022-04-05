import { Zone } from '../interfaces/entities/zone.entity'
import { BaseApiService } from './service.base'

export class ZoneService implements BaseApiService<Zone> {
	doGet(queryParams?: Zone): Promise<Zone[]> {
		throw new Error('Method not implemented.')
	}
	doPatch(entities: Zone[]): Promise<Zone[]> {
		throw new Error('Method not implemented.')
	}
	doPut(entities: Zone[]): Promise<Zone[]> {
		throw new Error('Method not implemented.')
	}
	doPost(entities: Zone[]): Promise<Zone[]> {
		throw new Error('Method not implemented.')
	}
	doDelete(entityIds: string[]): Promise<string[]> {
		throw new Error('Method not implemented.')
	}

}