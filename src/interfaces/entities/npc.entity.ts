export interface NPC {
	id: string
  title: string
  description: string
	greeting: string
	questLineIds: string
	
}

export interface Blacksmith extends NPC {
	canRepair: boolean

}
