export interface World {
	id: string
	title: string
	seed: string
	difficulty: WorldDifficulty
}

export type WorldDifficulty  = 'Easy' | 'Medium' | 'Hard'

export interface WorldValidated {
	valid: boolean, 
	world: World, 
	errors?: string[]
}