export default class NotFoundEnvVariableException extends Error {
  constructor (key) {
    super(`${key} key is not defined.`)
    this.name = 'NotFoundEnvVariableException'
  }
}
