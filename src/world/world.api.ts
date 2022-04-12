import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { WorldService } from './world.service'
import { EnvVar } from '../common/common.constants'
import { isNotNullAndNotUndefined, isNullOrUndefined } from 'nhs-core-utils'
import { WorldTableRow } from './world.data.interfaces'

const world: AzureFunction = async function world (
	context: Context,
	request: HttpRequest
): Promise<{response: {statusCode: number, body: any}}> {
	const worldService = new WorldService(process.env[EnvVar.DataStorageConnection])

	let result: any
	switch(request.method){
		case 'GET': result = await worldService.doGet(request.query as unknown as WorldTableRow)
			break
		case 'POST': result = await worldService.doPost(request.body as unknown as WorldTableRow[])
			break
		case 'DELETE': result = await worldService.doDelete(request.body as unknown as string[])
			break 
	}

	if(isNullOrUndefined(result) || isNotNullAndNotUndefined(result.errors)){
		return {
			response: {
				statusCode: 400,
				body: result ?? {errors: [{message: 'Invalid Request. Check body content and try again.'}]}
			}
		}
	}

	return {
		response: {
			statusCode: 200,
			body: result
		}
	}
}

export default world
