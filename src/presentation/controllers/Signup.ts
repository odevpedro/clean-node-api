/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpResponse, HttpRequest } from '../protocols/htpp'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    } else if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    } else {
      // Adiciona um retorno final
      return {
        statusCode: 200,
        body: { success: true }
      }
    }
  }
}
