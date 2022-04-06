import { Zone } from '../interfaces/entities/zone.entity'
import { BaseApiService } from './service.base'

export class ZoneService implements BaseApiService<Zone> {
  async doGet (queryParams?: Zone): Promise<Zone[]> {
    throw new Error('Method not implemented.')
  }

  async doPatch (entities: Zone[]): Promise<Zone[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entities: Zone[]): Promise<Zone[]> {
    throw new Error('Method not implemented.')
  }

  async doPost (entities: Zone[]): Promise<Zone[]> {
    throw new Error('Method not implemented.')
  }

  async doDelete (entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
