import { QuestLine } from '../entities/quest.entity'
import { BaseApiService } from './service.base'

export class QuestLineService implements BaseApiService<QuestLine> {
  async doGet (queryParams?: QuestLine): Promise<QuestLine[]> {
    throw new Error('Method not implemented.')
  }

  async doPatch (entities: QuestLine[]): Promise<QuestLine[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entities: QuestLine[]): Promise<QuestLine[]> {
    throw new Error('Method not implemented.')
  }

  async doPost (entities: QuestLine[]): Promise<QuestLine[]> {
    throw new Error('Method not implemented.')
  }

  async doDelete (entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
