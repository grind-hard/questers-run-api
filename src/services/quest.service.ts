import { Quest } from '../interfaces/entities/quest.entity'
import { BaseApiService } from './service.base'

export class QuestService implements BaseApiService<Quest> {
	doGet(queryParams?: Quest): Promise<Quest[]> {
		throw new Error('Method not implemented.')
	}
	doPatch(entities: Quest[]): Promise<Quest[]> {
		throw new Error('Method not implemented.')
	}
	doPut(entities: Quest[]): Promise<Quest[]> {
		throw new Error('Method not implemented.')
	}
	doPost(entities: Quest[]): Promise<Quest[]> {
		throw new Error('Method not implemented.')
	}
	doDelete(entityIds: string[]): Promise<string[]> {
		throw new Error('Method not implemented.')
	}

}