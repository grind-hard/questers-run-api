export interface BaseApiRepository<T> {
	get(): Promise<T[]>
	getById(id: string): Promise<T>
	add(o: T): Promise<T>
	update(o: T): Promise<T>
	delete(id: string): Promise<boolean>
}