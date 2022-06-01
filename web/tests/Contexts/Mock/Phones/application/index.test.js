import { PhoneRepositoryMock } from 'tests/Contexts/Mock/__mocks__/PhoneRepositoryMock'

let mockRepository = null

beforeAll(() => {
  mockRepository = new PhoneRepositoryMock()
})

describe('Phones', () => {
  describe('POST /api/phones', () => {
    it('should create a new phone', async () => {
      await mockRepository.assertCreatePhone()
    })
  })

  describe('GET /api/phones', () => {
    it('should get all phones', async () => {
      await mockRepository.assertGetAllPhones()
    })

    it('should be more than one long', async () => {
      await mockRepository.assertGetAllPhoneGreaterThanOne()
    })

    it('should respond with error', async () => {
      await mockRepository.assertRespondWithErrorForGetPhones()
    })
  })

  describe('GET /api/phones/:number', () => {
    it('should get a phone by number', async () => {
      await mockRepository.assertGetPhoneByNumber()
    })

    it('should respond with error', async () => {
      await mockRepository.assertRespondWithErrorForGetPhoneByNumber()
    })
  })

  describe('PUT /api/phones/:number', () => {
    it('should edit a phone', async () => {
      await mockRepository.assertEditPhoneByNumber()
    })

    it('should respond with error', async () => {
      await mockRepository.assertRespondWithErrorForEditPhoneByNumber()
    })
  })

  describe('DELETE /api/phones/:number', () => {
    it('should delete a phone', async () => {
      await mockRepository.assertDeletePhoneByNumber()
    })

    it('should respond with error', async () => {
      await mockRepository.assertRespondWithErrorForDeletePhoneByNumber()
    })
  })
})
