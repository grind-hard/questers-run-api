import { Tables } from '../common/constants'
import { Character } from '../interfaces/entities/character'
import { DefaultEntityService } from './service.base'

export class CharacterService extends DefaultEntityService<Character> {
  constructor () { super(Tables.Character) }
}
