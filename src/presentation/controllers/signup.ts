import { HttpResponse, HttpResquest } from '../protocols/http'

export class SignUpController {
  handle (httpResquest: HttpResquest): HttpResponse {
    if (!httpResquest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpResquest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
