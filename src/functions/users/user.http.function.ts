import { isNotNullAndNotUndefined, isNullOrUndefined } from 'nhs-core-utils'
import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { HttpResponseBase } from '../common/response.interfaces'
import { DefaultUserController } from './user.http.controller'
import { EnVar } from '../../common/common.statics'
import { User } from '../../interfaces/entities/user'
import { validatePutRequest } from './user.http.service'

/** https://api.questers-run.com/v1/users */
const usersHttp: AzureFunction = async function usersHttp (
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

  const controller = new DefaultUserController(process.env[EnVar.StorageAccount])
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

    const user: User = await controller.doPut(JSON.parse(request.body))
    if(isNotNullAndNotUndefined(user)){
      return {
        response: {
          statusCode: 201,
          body: {
            success: true,
            messages: [{id: user.id, auth: user.authentication}]
          }
        }
      }
    } else {
      return {
        response: {
          statusCode: 400,
          body: {
            success: false,
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
}

export default usersHttp
