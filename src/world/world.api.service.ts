import { azure, PromiseTableService } from 'azure-table-promise';
import { v3, v4 } from 'uuid';
import { EnvVar, Tables } from '../common/common.constants';
import { BaseHttpResponse } from '../common/common.interfaces';
import { World, WorldValidated } from './world.interfaces';

export class WorldApiService {

	validate(world: World): WorldValidated {
		/** TODO: Fill in validation statements. */
		return {
			valid: undefined,
			world: undefined,
			errors: undefined
		}
	}

	exists(worldId: string): boolean {
		return undefined
	}

	/**
	 * Gets one, or many, worlds by given parameters, or none.
	 * @param worldParameters World (or statment)
	 * @returns Promise<World[]>
	 */
	async get(worldParameters: World): Promise<BaseHttpResponse> {
		const tableService = new PromiseTableService(process.env[EnvVar.Storage])
		const query = new azure.TableQuery().select()
			.where('PartitionKey eq ?', worldParameters.id)


		const queryResponse = await tableService.queryEntitiesAll<World>(Tables.Worlds, query)
		const worlds: World[] = queryResponse.entries

		return {
			status: 200,
			body: worlds
		}
	}

	/**
	 * Upserts a world in the table and upserts the container folders and meta.
	 * @param world BaseHttpResponse
	 * @returns Promise<World>
	 */
	async post(world: World): Promise<BaseHttpResponse> {
		const tableService = new PromiseTableService(process.env[EnvVar.Storage])
		const query = new azure.TableQuery().select()
			.where('PartitionKey eq ?', world.id)
		
		const queryResponse = await tableService.queryEntitiesAll<World>(Tables.Worlds, query)
		const worlds = queryResponse.entries
		let foundWorld = worlds[0]

		if(typeof foundWorld === 'undefined'){
			/** Does not exist, create a new world. It needs a generated id. */
			const id = v3(v4(), 'world')
			const seed = v3(v4(), 'world-seed')
			foundWorld = {
				...world,
				id,
				seed
			}
		} else {
			/** Exists, don't update the essentials. */
			delete foundWorld.id
			delete foundWorld.seed

			foundWorld = {
				...foundWorld,
				...world
			}
		}

		/** Upsert data. */
		return {
			status: 200,
			body: foundWorld
		}
	}

}