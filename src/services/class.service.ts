import { Class } from '../interfaces/entities/class.entity'
import { BaseApiService } from './service.base'

export class ClassService implements BaseApiService<Class> {
  async doGet (queryParams?: Class): Promise<Class[]> {
    throw new Error('Method not implemented.')
  }

  async doPatch (entities: Class[]): Promise<Class[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entities: Class[]): Promise<Class[]> {
    throw new Error('Method not implemented.')
  }

  async doPost (entities: Class[]): Promise<Class[]> {
    throw new Error('Method not implemented.')
  }

  async doDelete (entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
