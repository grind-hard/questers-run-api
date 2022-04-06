import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { World } from '../interfaces/entities/world.entity'
import { WorldService } from '../services/world.service'

const world: AzureFunction = async function world (
	context: Context,
	request: HttpRequest
): Promise<{response: {statusCode: number, body: any}> {
	const worldService = new WorldService()

	let result: any
	switch(request.method){
		case 'GET': result = await worldService.doGet(request.query as unknown as World)
			break
		case 'POST': result = await worldService.doPost(request.body as unknown as World[])
			break
		case 'DELETE': result = await worldService.doDelete(request.body as unknown as string[])
			break 
	}

	return {
		response: {
			statusCode: 200,
			body: result
		}
	}
}

export default world
