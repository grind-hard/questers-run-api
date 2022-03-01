import { AzureFunctionSchema } from 'ts-func'

export const users: AzureFunctionSchema = {
  bindings: [
    {
      name: 'usersRequest',
      type: 'httpTrigger',
      direction: 'in',
      methods: ['get', 'post', 'delete', 'put', 'patch']
    }
  ],
  scriptFile: '../dist/src/functions/src/users/users.http.js'
}
