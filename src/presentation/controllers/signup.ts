import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpResquest: HttpResquest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpResquest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
