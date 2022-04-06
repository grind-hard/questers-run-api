import { NPCType } from '../interfaces/entities/npc.entity';
import { BaseApiService } from './service.base';

export class NPCTypeService implements BaseApiService<NPCType> {
	doGet(queryParams?: NPCType): Promise<NPCType[]> {
		throw new Error('Method not implemented.');
	}
	doPatch(entities: NPCType[]): Promise<NPCType[]> {
		throw new Error('Method not implemented.');
	}
	doPut(entities: NPCType[]): Promise<NPCType[]> {
		throw new Error('Method not implemented.');
	}
	doPost(entities: NPCType[]): Promise<NPCType[]> {
		throw new Error('Method not implemented.');
	}
	doDelete(entityIds: string[]): Promise<string[]> {
		throw new Error('Method not implemented.');
	}

}