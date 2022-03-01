import { isNullOrUndefined, loggerWithDefaults } from 'nhs-core-utils'
import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { HttpResponseBase } from '../common/response.interfaces'
import { DefaultUsersController } from './users.controller'
import { EnVar } from '../../common/constants'
import { User } from '../../interfaces/entities/user'
import { validatePutRequest } from './users.service'

const logger = loggerWithDefaults()

/** https://api.questers-run.com/v1/users */
const usersHttp: AzureFunction = logger.azureFunctionHandler(async function usersHttp (
  context: Context,
  request: HttpRequest
): Promise<{response: HttpResponseBase}> {
  if (isNullOrUndefined(request) || isNullOrUndefined(request.body)) {
    return {
      response: {
        statusCode: 400,
        body: {
          success: false,
          messages: ['Required request not provided.']
        }
      }
    }
  }

  const controller = new DefaultUsersController(process.env[EnVar.StorageAccount])
  if (request.method === 'POST') {
    // A. Check Client Credentials
    // B. Get Users by Field Name and Value
    throw new Error('Method not implemented.')
  } else if (request.method === 'GET') {
    // A. Get All User Records
    throw new Error('Method not implemented.')
  } else if (request.method === 'PUT') {
    const validatedRequest: string[] = validatePutRequest(request.body)
    if (validatedRequest.length > 0) {
      return {
        response: {
          statusCode: 400,
          body: {
            success: false,
            messages: validatedRequest
          }
        }
      }
    }

    const user: User = await controller.doPut(request.body)

    return {
      response: {
        statusCode: 201,
        body: {
          success: true,
          messages: [user.id]
        }
      }
    }
  } else if (request.method === 'PATCH') {
    // A. Update a User's Record
    throw new Error('Method not implemented.')
  } else if (request.method === 'DELETE') {
    // A. Delete a User's Record
    throw new Error('Method not implemented.')
  } else {
    return {
      response: {
        statusCode: 400,
        body: {
          success: false,
          messages: ['Invalid method provided.']
        }
      }
    }
  }
})

export default usersHttp
