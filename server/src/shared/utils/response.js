import Messages from '../constants/response'
import HttpError from '../utils/http.error'

export default class BaseResponse {
  constructor() {
    this.messages = Messages
    this.HttpError = HttpError
  }

  sendResponse(res, next, { ...params }) {
    let response = {}
    let { messages, data, status, token } = params
    if (messages) response.messages = messages
    if (data) response.data = data
    if (token) response.token = token
    res.status(status || 200).json(response)
    next()
  }

  sendError(res, next, { ...params }) {
    let response = {}
    let { messages, status, error = null } = params
    response.messages = !messages
      ? this.messages.UNAUTHORIZED_REQUEST
      : messages
    if (error) response.error = error

    res.status(status || 401).json(response)
    next()
  }
}
