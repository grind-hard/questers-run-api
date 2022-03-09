import { setupEnvironment } from '../../defaults.test'
import * as sinon from 'sinon'
import { BlockBlobService, TableWriterBatch } from 'azure-utils'
import * as usersHttp from '../../../src/functions/users/user.http.function'
import { strictEqual } from 'assert'
import { PromiseTableService } from 'azure-table-promise'
import { DefaultUserController } from '../../../src/functions/users/user.http.controller'

describe('Users', () => {
  describe('Http', () => {
    let executeBatchesStub: any
    let writeStub: any
    let deleteStub: any
    let queryStub: any
    let putStub: any

    beforeEach(async () => {
      setupEnvironment()

      executeBatchesStub = sinon.stub(TableWriterBatch.prototype, 'executeBatches')
      writeStub = sinon.stub(BlockBlobService.prototype, 'write')
      deleteStub = sinon.stub(BlockBlobService.prototype, 'delete')
      queryStub = sinon.stub(PromiseTableService.prototype, 'queryEntitiesAll')
      putStub = sinon.stub(DefaultUserController.prototype, 'doPut')
    })

    afterEach(async () => {
      sinon.restore()
    })

    it('should return out if the request is not provided', async () => {
      const result = await usersHttp.default({} as any, undefined)
      strictEqual(result.response.statusCode, 400)
    })

    it('should return out if the method is not provided', async () => {
      const result = await usersHttp.default({} as any, { body: { }, method: '' })
      strictEqual(result.response.statusCode, 400)
    })
  })
})
