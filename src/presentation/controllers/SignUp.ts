/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/htttp-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    } else if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    } else {
      // Adiciona um retorno final
      return {
        statusCode: 200,
        body: { success: true }
      }
    }
  }
}
