import { World } from '../interfaces/entities/world.entity'
import { BaseApiService } from './service.base'

export class WorldService implements BaseApiService<World> {
  async doGet (queryParams?: World): Promise<World[]> {
    throw new Error('Method not implemented.')
  }

  async doPatch (entities: World[]): Promise<World[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entities: World[]): Promise<World[]> {
    throw new Error('Method not implemented.')
  }

  async doPost (entities: World[]): Promise<World[]> {
    throw new Error('Method not implemented.')
  }

  async doDelete (entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
