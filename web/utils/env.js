import NotFoundEnvVariableException from 'exceptions/env/NotFoundEnvVariableException'
import UndefinedKeyEnvironmentVariable from 'exceptions/env/UndefinedKeyEnvironmentVariable'

const getEnvironmentVariable = (key) => {
  if (!process.env[key]) {
    throw new NotFoundEnvVariableException(key)
  }

  return process.env[key]
}

export const get = (key) => {
  if (!key) {
    throw new UndefinedKeyEnvironmentVariable(key)
  }

  if (!Array.isArray(key)) {
    return getEnvironmentVariable(key)
  }

  return key.map((k) => getEnvironmentVariable(k))
}

export const set = (key, value) => {
  if (!key) {
    throw new UndefinedKeyEnvironmentVariable(key)
  }

  process.env[key] = value || ''
}
