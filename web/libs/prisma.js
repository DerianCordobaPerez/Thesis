import { PrismaClient } from '@prisma/client'
import { get } from 'utils/env'

function initialize () {
  const isProduction = get('NODE_ENV') === 'production'
  if (isProduction) {
    return new PrismaClient()
  }

  global.prisma ??= new PrismaClient()
  return global.prisma
}

const prisma = initialize()
export default prisma
