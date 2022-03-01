export interface ControllerBase<T> {
	doPost(filters: any): Promise<T[]>
	doGet()
}