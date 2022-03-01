import { Tables } from '../common/entites'
import { Character } from '../interfaces/entities/character'
import { BaseCoreEntity } from './service.base'

export class CharacterService extends BaseCoreEntity<Character> {
  constructor () { super(Tables.Character) }
}
