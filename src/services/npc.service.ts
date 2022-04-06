import { NPC } from '../interfaces/entities/npc.entity'
import { BaseApiService } from './service.base'

export class NPCService implements BaseApiService<NPC> {
  doGet(queryParams?: NPC): Promise<NPC[]> {
    throw new Error('Method not implemented.')
  }
  doPatch(entities: NPC[]): Promise<NPC[]> {
    throw new Error('Method not implemented.')
  }
  doPut(entities: NPC[]): Promise<NPC[]> {
    throw new Error('Method not implemented.')
  }
  doPost(entities: NPC[]): Promise<NPC[]> {
    throw new Error('Method not implemented.')
  }
  doDelete(entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}