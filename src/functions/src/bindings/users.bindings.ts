import { AzureFunctionSchema } from 'ts-func'

export const universe: AzureFunctionSchema = {
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
