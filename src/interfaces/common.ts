import { Stat } from './entities/stats'

export type ExecutionStatus = 'Success' | 'Failed' | 'Warn' | 'Debug' | 'Log'

export interface BasePoints {
  hp: number
  mana: number
  stamina: number
}

export interface Effects {
  id: string
  description: string
  self?: BasePoints
  target?: BasePoints
  stats?: Stat[]
  chance: number
}
