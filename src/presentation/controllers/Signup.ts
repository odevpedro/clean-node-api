export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle (_httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
