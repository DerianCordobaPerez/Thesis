import { PrismaClient } from '@prisma/client'
import { NODE_ENV } from 'config/env'

let prisma

if (NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  global.prisma ??= new PrismaClient()
  prisma = global.prisma
}

export default prisma
