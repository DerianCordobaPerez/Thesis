import { mockDeep, mockReset } from 'jest-mock-extended'
import prisma from 'libs/prisma'

jest.mock('libs/prisma', () => ({
  __esModule: true,
  default: mockDeep()
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma
