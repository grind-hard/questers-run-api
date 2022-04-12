export interface InvalidRequestResult {
	errors: Error[]
}

export interface Error {
	message: string
	error: any
}

export interface DeleteResponse {
	missingIds: string[]
}
