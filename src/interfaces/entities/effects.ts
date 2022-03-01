import { EntityBase } from "./entites.base"
import { Points } from "./points"
import { Stats } from "./stats"

export interface Effects extends EntityBase {
    id: string
    description: string
    self?: Points
    target?: Points
    stats?: Stats
    chance: number
  }
  