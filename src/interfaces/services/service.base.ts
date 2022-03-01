
export interface ServiceBase<Object> {
  upsert: (objects: Object[]) => Promise<Object[]>
  get: (parameters: any) => Promise<Object[]>
}
