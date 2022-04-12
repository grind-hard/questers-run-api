import { Character } from '../entities/character.entity'
import { BaseApiService } from './service.base'

export class CharacterService implements BaseApiService<Character> {
  async doGet (queryParams?: Character): Promise<Character[]> {
    throw new Error('Method not implemented.')
  }

  async doPatch (entities: Character[]): Promise<Character[]> {
    throw new Error('Method not implemented.')
  }

  async doPut (entities: Character[]): Promise<Character[]> {
    throw new Error('Method not implemented.')
  }

  async doPost (entities: Character[]): Promise<Character[]> {
    throw new Error('Method not implemented.')
  }

  async doDelete (entityIds: string[]): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
