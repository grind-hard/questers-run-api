import { EnVar } from '../src/common/common.statics'

// https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator
const STORAGE_ACCOUNT =
`DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;
AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;
BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;
QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;
TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;`

export function setupEnvironment (): void {
  process.env[EnVar.StorageAccount] = STORAGE_ACCOUNT
  process.env[EnVar.Pepper] = 'salty'
  process.env[EnVar.Algorithm] = 'sha256'
  process.env[EnVar.Digest] = 'hex'
  process.env.ROLLBAR_ACCESS_TOKEN = 'token'
  process.env.ROLLBAR_ENV = 'test'
}
