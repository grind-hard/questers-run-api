import { v4 } from "uuid"
import { hashValue } from "../functions/users/users.http.service"
import { Role } from "../interfaces/entities/roles"
import { Server } from "../interfaces/entities/server"
import { User } from "../interfaces/entities/user"

export function demo() {
	const server: Server = {
		id: v4(),
		description: `Hayzlit's Server`,
		title: 'Demonstration Server'
	}

	const adminRole: Role = {
		id: v4(),
		canManage: {
			servers: [server.id],
			users: true,
			creative: true
		},
		description: 'Administration',
		title: 'Admin'
	}

	const newUser: User = {
		active: false,
		email: 'h4yzl1t@gmail.com',
		password: hashValue('scorpions fly away at noon'),
		phone: '555-555-5555',
		twoFactor: false,
		username: hashValue('hayzlit')
	}


}

export default demo()
