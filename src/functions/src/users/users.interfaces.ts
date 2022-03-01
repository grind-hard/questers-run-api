import { User } from "../../../interfaces/entities/user"

export interface UsersHttpRespone {
	statusCode: number
	body: UsersHttpResponseBody
}

export interface UsersHttpResponseBody {
	success: boolean
	messages: string[]
	users: User[]
}