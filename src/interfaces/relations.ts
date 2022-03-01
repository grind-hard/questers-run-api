export interface RelativeUser {
  readonly id: string
  universeIds?: string[]
}
export interface RelativeUniverse {
  readonly id: string
  worldIds?: string[]
}

export interface RelativeWorld {
  readonly id: string
  readonly universeId: string
}

export interface RelativeCharacter {
  readonly id: string
  readonly characterId: string
  readonly userId?: string
  readonly classIds?: string[]
}

export interface RelativeClass {
  readonly id: string
}
