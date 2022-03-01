import { setupEnvironment } from "../../defaults.test"
import * as sinon from 'sinon'
import { BlockBlobService, TableWriterBatch } from "azure-utils"
import * as usersHttp from '../../../src/functions/users/users.http'
import { strictEqual } from "assert"
import { PromiseTableService } from "azure-table-promise"

describe('Users', () => {

	describe('Http', () => {
		let executeBatchesStub: any
		let writeStub: any
		let deleteStub: any
		let queryStub: any

		beforeEach(async () => {
			setupEnvironment()

			executeBatchesStub = sinon.stub(TableWriterBatch.prototype, 'executeBatches')
			writeStub = sinon.stub(BlockBlobService.prototype, 'write')
			deleteStub = sinon.stub(BlockBlobService.prototype, 'delete')
			queryStub = sinon.stub(PromiseTableService.prototype, 'queryEntitiesAll')
		})

		afterEach(async () => {
			sinon.restore()
		})

		it('should return out if the request is not provided', async () => {
			const response = await usersHttp.default({} as any, { body: {  }, method: '' })
			strictEqual(response.statusCode, 400)
		})

	})

})