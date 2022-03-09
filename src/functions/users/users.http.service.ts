import { BinaryToTextEncoding, createHash } from 'crypto'
import { isNullOrUndefined } from 'nhs-core-utils'
import { EnVar } from '../../common/common.statics'
import { User } from '../../interfaces/entities/user'

export function hashValue (value: any): string {
  return createHash(process.env[EnVar.Algorithm]).update(`${value}${process.env[EnVar.Pepper]}`).digest(process.env[EnVar.Digest] as BinaryToTextEncoding)
}

export function validatePutRequest (requestBody: any): string[] {
  const errors: string[] = []

  try{
    requestBody = JSON.parse(requestBody)
  } catch(error){
    errors.push('Failed to parse JSON.')
    return errors
  }

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
