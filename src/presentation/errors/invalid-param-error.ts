/* eslint-disable @typescript-eslint/restrict-template-expressions */
export class InvalidParamError extends Error {
    constructor (paramName: string) {
      super(`Invalid param: ${paramName}`)
      this.name = 'MissingParamError'
    }
  }
  