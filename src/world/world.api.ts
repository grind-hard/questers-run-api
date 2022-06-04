import { BlockBlobClient } from '@azure/storage-blob'
import { EnvVar } from '../common/common.constants'
import { BaseHttpResponse } from '../common/common.interfaces'
import { WorldApiService } from './world.api.service'
import { World } from './world.interfaces'

const world = async function(
	context: any,
	request: any
){ 
	const worldApiService = new WorldApiService()

	let response: any
	let world: World
	if(request.method === 'POST'){
		const validatedWorld = worldApiService.validate(request.body)
		if(!validatedWorld.valid){
			return {
				response: {
					status: 400,
					message: 'Invalid world.'
				}
			}
		}
		
		const response: BaseHttpResponse = await worldApiService.post(validatedWorld.world)
		return {
			response:{ 
				status: response.status,
				body: response.body
			}
		}

	} else if(request.method === 'GET'){
		/** Get one or many worlds */
		const validatedWorld = worldApiService.validate(request.body)
		if(!validatedWorld.valid){
			return {
				response: {
					status: 400,
					message: 'Invalid world.'
				}
			}
		}


	}
	
	return {
		response
	}
}

export default world
