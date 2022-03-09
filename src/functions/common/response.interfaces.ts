export interface HttpResponseBase {
  statusCode: number
  body: HttpResponseBodyBase
}

export interface HttpResponseBodyBase {
  success: boolean
  messages: any[]
  content?: any
}
