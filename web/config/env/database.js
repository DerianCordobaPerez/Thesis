import { NODE_ENV } from 'process'

export const DATABASE_URL = NODE_ENV !== 'production'
  ? process.env.NEXT_DEVELOPMENT_ENV_DATABASE_URL
  : process.env.NEXT_PRODUCTION_ENV_DATABASE_URL
