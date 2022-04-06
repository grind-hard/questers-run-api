export interface BaseApiService<T> {
  doGet: (queryParams?: T) => Promise<T[]>
  doPatch: (entities: T[]) => Promise<T[]>
  doPut: (entities: T[]) => Promise<T[]>
  doPost: (entities: T[]) => Promise<T[]>
  doDelete: (entityIds: string[]) => Promise<string[]>
}
