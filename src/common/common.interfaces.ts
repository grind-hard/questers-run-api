import { HttpResponse } from '@azure/core-http'

export interface BaseHttpResponse {
	status: number
	body: any
}