
export interface ServiceBase<T> {
  upsert: (objects: T[]) => Promise<T[]>
  get: (parameters: any) => Promise<T[]>
}
