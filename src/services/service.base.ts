export interface BaseApiService<T> {
	doGet(queryParams: T): Promise<T[]>
	doPatch(objects: T[]): Promise<T[]>
	doPut(objects: T[]): Promise<T[]>
	doPost(objects: T[]): Promise<T[]>
	doDelete(objectIds: string[]): Promise<string[]>
}