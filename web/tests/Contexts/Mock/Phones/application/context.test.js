import {
  createPhone,
  deletePhone,
  getAllPhones,
  getPhone,
  updatePhone,
  cleanUp
} from '../context'
import { prismaMock } from 'tests/Contexts/singleton'

afterAll(async () => {
  await cleanUp()
})

describe('Phone Context', () => {
  describe('Create Phone', () => {
    it('should create a new phone', async () => {
      const phone = {
        id: '1',
        number: '456987123',
        brand: 'TIGO'
      }

      prismaMock.phone.create.mockResolvedValue(phone)

      await expect(createPhone(phone)).resolves.toEqual(phone)
    })

    it('should throw an error when create a new phone', async () => {
      prismaMock.phone.create.mockRejectedValue(new Error('Couldn\'t create phone'))

      await expect(createPhone({})).resolves.toEqual(
        new Error('Couldn\'t create phone')
      )
    })
  })

  describe('Get phones', () => {
    it('Should return all phones', async () => {
      const phones = await getAllPhones()
      expect(phones).toBeDefined()
      expect(phones.length).toBeGreaterThan(0)
    })

    it('should get a phone by number', async () => {
      const phone = {
        id: '1',
        number: '456987123',
        brand: 'TIGO'
      }

      prismaMock.phone.findOne.mockResolvedValue(phone)

      await expect(getPhone(phone.number)).resolves.toEqual(phone)
    })

    it('should throw an error when get a phone by number', async () => {
      prismaMock.phone.findOne.mockRejectedValue(null)

      await expect(getPhone('x')).resolves.toEqual(null)
    })
  })

  describe('Update Phone', () => {
    it('should update a phone', async () => {
      const phone = {
        id: '1',
        number: '456987123',
        brand: 'TIGO'
      }

      prismaMock.phone.update.mockResolvedValue(phone)

      await expect(updatePhone(phone)).resolves.toEqual(phone)
    })

    it('should throw an error when update a phone', async () => {
      prismaMock.phone.update.mockRejectedValue(new Error('Couldn\'t update phone'))

      await expect(updatePhone({})).resolves.toEqual(
        new Error('Couldn\'t update phone')
      )
    })
  })

  describe('Delete Phone', () => {
    it('should delete a phone', async () => {
      prismaMock.phone.delete.mockResolvedValue({})

      await expect(deletePhone('1')).resolves.toEqual({})
    })

    it('should throw an error when delete a phone', async () => {
      prismaMock.phone.delete.mockRejectedValue(new Error('Couldn\'t delete phone'))

      await expect(deletePhone('x')).resolves.toEqual(
        new Error('Couldn\'t delete phone')
      )
    })
  })
})
