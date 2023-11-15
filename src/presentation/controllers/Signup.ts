/* eslint-disable @typescript-eslint/consistent-type-imports */
import { HttpResponse, HttpRequest } from '../protocols/htpp'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    } else if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
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
