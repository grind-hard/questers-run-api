import { EnVar } from "../src/common/constants";

export function setupEnvironment(): void {
	process.env[EnVar.StorageAccount] = 'storage'
	process.env[EnVar.Pepper] = 'salty'
}