import { ServiceBase } from '../interfaces/services/service.base'

export class DefaultEntityService<T> implements ServiceBase<T> {
  tableName: any

  constructor (tableName: string) {
    this.tableName = tableName
  }

  async upsert (objects: T[]): Promise<T[]> {
    console.log(`update in '${this.tableName}': ${JSON.stringify(objects, null, 2)}`)
    return undefined
  }

  async get (parameters: any): Promise<T[]> {
    console.log(`get from '${this.tableName}': ${JSON.stringify(parameters, null, 2)}`)
    return undefined
  }
}
