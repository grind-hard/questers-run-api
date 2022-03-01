import { AzureFunctionSchema } from 'ts-func'

export const universe: AzureFunctionSchema = {
  bindings: [
    {
      name: 'universeEndPoint',
      type: 'httpTrigger',
      direction: 'in',
      methods: ['get', 'post']
    }
  ],
  scriptFile: '../dist/src/universe/universe.js'
}
