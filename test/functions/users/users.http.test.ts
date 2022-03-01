import { setupEnvironment } from "../../defaults.test"
import * as sinon from 'sinon'
import { BlockBlobService, TableWriterBatch } from "azure-utils"

describe('Users', () => {

	describe('Http', () => {
		let executeBatchesStub: any
		let writeStub: any

		beforeEach(async () => {
			setupEnvironment()

			executeBatchesStub = sinon.stub(TableWriterBatch.prototype, 'executeBatches')
			writeStub = sinon.stub(BlockBlobService.prototype, 'write')
		})

		afterEach(async () => {
			sinon.restore()
		})

		it('should return out if the request is not provided')

	})

})