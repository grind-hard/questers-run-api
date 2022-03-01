import { RelativeWorld } from '../relations'

export interface World extends RelativeWorld {
  name: string
  characerIds: string[]
  maxCharacterAmount: number
}
