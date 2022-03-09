import { v4 } from "uuid"
import { setupEnvironment } from "../../test/defaults.test"
import { hashValue } from "../functions/users/user.http.service"
import { Role } from "../interfaces/entities/roles"
import { Server } from "../interfaces/entities/server"
import { User } from "../interfaces/entities/user"
import * as sinon from 'sinon'
import { BlockBlobService, TableWriterBatch } from "azure-utils"
import { PromiseTableService } from "azure-table-promise"
import * as usersFunction from '../functions/users/user.http.function'
import { DefaultUserController } from "../functions/users/user.http.controller"
import { EnVar } from "../common/common.statics"

export async function demo() {
	setupEnvironment()
	const writeStub = sinon.stub(BlockBlobService.prototype, 'write')
	const deleteStub = sinon.stub(BlockBlobService.prototype, 'delete')
	const executeBatchesStub = sinon.stub(TableWriterBatch.prototype, 'executeBatches') 
	const queryEntitiesAllStub: any = sinon.stub(PromiseTableService.prototype, 'queryEntitiesAll')
	/** not found on first and second call (creation) */
	queryEntitiesAllStub.onCall(0).returns({entries: []})

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
		password: hashValue('scorpions fly away at noon', 'salty'),
		phone: '555-555-5555',
		twoFactor: false,
		username: 'hayzlit',
		authenticated: false,
		authentication: v4(),
		salt: 'salty'
	}

	const newUserResponse = await usersFunction.default({} as any, {method: 'PUT', body: JSON.stringify(newUser)})
	console.log(JSON.stringify(newUserResponse, null, 2))
	

	sinon.restore()
}

export default demo()
