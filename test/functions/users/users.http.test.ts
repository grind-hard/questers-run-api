import { setupEnvironment } from '../../defaults.test'
import * as sinon from 'sinon'
import { BlockBlobService, TableWriterBatch } from 'azure-utils'
import * as usersHttp from '../../../src/functions/users/users.http.function'
import { strictEqual } from 'assert'
import { PromiseTableService } from 'azure-table-promise'
import { DefaultUsersController } from '../../../src/functions/users/users.http.controller'

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
      putStub = sinon.stub(DefaultUsersController.prototype, 'doPut')
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

    const test = [
      { request: { body: undefined }, expected: 400 },
      { request: { body: [] }, expected: 400 },
      { request: { body: { username: 'user' } }, expected: 400 },
      { request: { body: { username: undefined, password: 'password', email: 'email' } }, expected: 400 },
      { request: { body: { username: 'user', password: undefined, email: 'email@test.com' } }, expected: 400 },
      { request: { body: { username: 'user', password: 'password', email: undefined } }, expected: 400 },
      { request: { body: { username: 'user', password: 'password', email: 'email@test.com' } }, expected: 201 }
    ]

    it('should make validate put requests for required fields', async () => {
      for (const data of test) {
        putStub.returns(data.request.body)
        const result = await usersHttp.default({} as any, { body: data.request.body, method: 'PUT' })
        strictEqual(result.response.statusCode, data.expected)
      }
    })
  })
})
