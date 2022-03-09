import { isNotNullAndNotUndefined, isNullOrUndefined, loggerWithDefaults } from 'nhs-core-utils'
import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { HttpResponseBase } from '../common/response.interfaces'
import { DefaultUsersController } from './users.http.controller'
import { EnVar } from '../../common/common.statics'
import { User } from '../../interfaces/entities/user'
import { validatePutRequest } from './users.http.service'

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
    return {
      response: {
        statusCode: 501,
        body: {
          success: false,
          messages: ['Notify a dev.']
        }
      }
    }
  } else if (request.method === 'GET') {
    // A. Get All/Filtered User Records
    return {
      response: {
        statusCode: 501,
        body: {
          success: false,
          messages: ['Notify a dev.']
        }
      }
    }
  } else if (request.method === 'PUT') {
    const validatedRequest: string[] = validatePutRequest(request.body)
    if (validatedRequest.length > 0) {
      return {
        response: {
          statusCode: 412,
          body: {
            success: false,
            messages: validatedRequest
          }
        }
      }
    }

    const user: User = await controller.doPut(request.body)
    if(isNotNullAndNotUndefined(user)){
      return {
        response: {
          statusCode: 201,
          body: {
            success: true,
            messages: [user.id]
          }
        }
      }
    } else {
      return {
        response: {
          statusCode: 400,
          body: {
            success: true,
            messages: ['Failed to create user.']
          }
        }
      }
    }
  } else if (request.method === 'PATCH') {
    // A. Update a User's Record
    // B. Request new authentication token
    return {
      response: {
        statusCode: 501,
        body: {
          success: false,
          messages: ['Notify a dev.']
        }
      }
    }
  } else if (request.method === 'DELETE') {
    // A. Delete a User's Record
    return {
      response: {
        statusCode: 501,
        body: {
          success: false,
          messages: ['Notify a dev.']
        }
      }
    }
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
