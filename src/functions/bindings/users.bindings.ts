import { AzureFunctionSchema } from 'ts-func'

export const users: AzureFunctionSchema = {
  bindings: [
    {
      name: 'request',
      type: 'httpTrigger',
      direction: 'in',
      methods: ['get', 'post', 'delete', 'put', 'patch']
    },
    {
      name: 'response',
      type: 'http',
      direction: 'out'
    }
  ],
  scriptFile: '../dist/src/functions/src/users/users.http.js'
}
