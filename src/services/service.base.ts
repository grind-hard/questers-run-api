import { ServiceBase } from '../interfaces/services/service.base'

export class BaseCoreEntity<Object> implements ServiceBase<Object> {
  tableName: any

  constructor (tableName: string) {
    this.tableName = tableName
  }

  async upsert (objects: Object[]): Promise<Object[]> {
    console.log(`update in '${this.tableName}': ${JSON.stringify(objects, null, 2)}`)
    return undefined
  }

  async get (parameters: any): Promise<Object[]> {
    console.log(`get from '${this.tableName}': ${JSON.stringify(parameters, null, 2)}`)
    return undefined
  }
}
