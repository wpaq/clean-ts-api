import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpResquest: HttpResquest): HttpResponse {
    if (!httpResquest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpResquest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
