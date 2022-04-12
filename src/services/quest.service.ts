import { Quest } from '../entities/quest.entity'
import { BaseApiService } from './service.base'

export class QuestService implements BaseApiService<Quest> {
  async doGet (queryParams?: Quest): Promise<Quest[]> {
    throw new Error('Method not implemented.')
  }

  async doPatch (entities: Quest[]): Promise<Quest[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entities: Quest[]): Promise<Quest[]> {
    throw new Error('Method not implemented.')
  }

  async doPost (entities: Quest[]): Promise<Quest[]> {
    throw new Error('Method not implemented.')
  }

  async doDelete (entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
