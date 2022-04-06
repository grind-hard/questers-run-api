export interface Zone {
  id: string
  worldId: string
  title: string
  description: string
  environment: ZoneEnvironments
}

export type ZoneEnvironments = 'desert' | 'forest' | 'mountains' | 'tundra'

export interface Zones {
  zones: Zone[]
}
