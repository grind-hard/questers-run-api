export interface NPC {
  id: string
  title: string
  description: string
  greeting: string
  npcTypeId: string
  questLineIds: string[]
  canRepair: boolean
  canTrain: boolean

}

export interface NPCType {
  id: string
  title: string
  description: string

}
