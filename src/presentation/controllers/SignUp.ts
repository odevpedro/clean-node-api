/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpRequest } from '../protocols/http'
import { HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/htttp-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../errors/invalid-param-error'


export class SignUpController implements Controller {

  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if(!isValid) {
      return badRequest(new InvalidParamError('email'))
    }

    return {
      statusCode: 200,
      body: 'Success',
    };
    
  }
 
}
