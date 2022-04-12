import { AzureFunctionSchema } from 'ts-func'

export const world: AzureFunctionSchema = {
	bindings: [
		{
			name: 'request',
			direction: 'in',
			type: 'httpTrigger',
			methods: [
				'get', 'post', 'delete'
			]
		},
		{
			name: 'response',
			direction: 'out',
			type: 'http'
		}
	],
	scriptFile: '../dist/src/world/world.api.js'
}
