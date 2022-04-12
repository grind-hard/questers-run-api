import { QuestStep } from '../entities/quest.entity';
import { BaseApiService } from './service.base';

export class QuestStepService implements BaseApiService<QuestStep> {
	doGet(queryParams?: QuestStep): Promise<QuestStep[]> {
		throw new Error('Method not implemented.');
	}
	doPatch(entities: QuestStep[]): Promise<QuestStep[]> {
		throw new Error('Method not implemented.');
	}
	doPut(entities: QuestStep[]): Promise<QuestStep[]> {
		throw new Error('Method not implemented.');
	}
	doPost(entities: QuestStep[]): Promise<QuestStep[]> {
		throw new Error('Method not implemented.');
	}
	doDelete(entityIds: string[]): Promise<string[]> {
		throw new Error('Method not implemented.');
	}

}