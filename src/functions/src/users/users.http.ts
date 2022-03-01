import { isNullOrUndefined, loggerWithDefaults } from "nhs-core-utils";
import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { HttpResponseBase } from "../common/response.interfaces";

const logger = loggerWithDefaults()

const usersHttp: AzureFunction = logger.azureFunctionHandler(async function usersHttp(
	context: Context,
	request: HttpRequest
): Promise<HttpResponseBase> {
	if(isNullOrUndefined(request)) return

	if(request.method === 'POST'){
		// A. Check Client Credentials
		// B. Get Users by Field Name and Value
	} else if(request.method === 'GET'){
		// A. Get All User Records
	} else if(request.method === 'PUT'){
		// A. Create User Record
	} else if(request.method === 'PATCH'){
		// A. Update a User's Record
	} else if(request.method === 'DELETE'){
		// A. Delete a User's Record
	} else {
		return {
			statusCode: 400,
			body: {
				success: false,
				messages: ['Invalid method provided.']
			}
		}
	}
})

export default usersHttp
