export interface QuestLine {
  id: string
  title: string
  description: string
}

export interface Quest {
  id: string
  title: string
  description: string
  questLineId: string
  questStepIds: string[]

}

export interface QuestStep {
  id: string
  title: string
  description: string
  questId: string

}
