import { isNullOrUndefined } from 'nhs-core-utils'
import { User } from '../../interfaces/entities/user'

// import * as crypto from 'crypto'
export function hashPassword (password: string): string {
  throw new Error('Method not implemented.')
}

export function validatePutRequest (requestBody: User): string[] {
  const errors: string[] = []

  if (isNullOrUndefined(requestBody) || typeof requestBody !== 'object') {
    errors.push('Request body is invalid.')
    return errors
  }

  if (isNullOrUndefined(requestBody.username)) {
    errors.push('Username is required.')
  }

  if (isNullOrUndefined(requestBody.password)) {
    errors.push('Password is required.')
  }

  if (isNullOrUndefined(requestBody.email)) {
    errors.push('Email is required.')
  } else {
    if (!isEmail(requestBody.email)) {
      errors.push('Email format is invalid.')
    }
  }

  return errors
}

// https://stackoverflow.com/questions/60737672/email-regex-pattern-in-nodejs
export function isEmail (email: string) {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  if (email !== '' && (email.match(emailFormat) != null)) {
    return true
  } else {
    return false
  }
}
