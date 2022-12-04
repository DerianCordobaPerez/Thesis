export default class UndefinedKeyEnvironmentVariable extends Error {
  constructor (key) {
    super(`${key} key is undefined.`)
    this.name = 'UndefinedKeyVariable'
  }
}
