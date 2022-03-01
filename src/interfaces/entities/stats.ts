import { BasePoints } from '../common'

export interface Stat {
  id: string
  title: string
  desciption: string
}

export interface Stats {
  id: string
  statIds: string[]
}
