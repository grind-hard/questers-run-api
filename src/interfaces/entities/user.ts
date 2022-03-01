/**
 * The user will contain acount level information so that
 * administrators and users alike can manage their server(s).
 *
 * All servers will come with a default administrator account.
 *
 * We'll need to store the following properties for a User:
 * ~ username: unique login id of the user
 * ~ password: process.env.QR_PEPPER + user input + random salt
 * ~ email: user's email address
 * ~ authentication: generated code for features like reset password
 * ~ hasTwoFactor: true or false
 * serverIds: a string array of ids to related a user to many servers
 */

export interface User {
  username: string
  password: string
  email: string
  phone: string
  authentication: string
  twoFactor: boolean
  serverIds?: string[]
}
