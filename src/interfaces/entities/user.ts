export interface User {
  id?: string
  active: boolean
  username: string
  password: string
  salt?: string
  email: string
  phone: string
  authentication?: string
  twoFactor: boolean
  serverIds?: string[]
}
