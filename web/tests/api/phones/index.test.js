import { createMocks } from 'node-mocks-http'
import handle from 'pages/api/phones'
import handlePhone from 'pages/api/phones/[number]'

describe('Phones', () => {
  const mockBrands = ['TIGO', 'CLARO', 'MOVISTAR', 'OTHER']

  describe('POST /api/phones', () => {
    it('should create a new phone', async () => {
      const mockPhone = {
        number: '123456789',
        brand: mockBrands[Math.floor(Math.random() * mockBrands.length)]
      }

      const { req, res } = createMocks({
        method: 'POST',
        body: {
          data: mockPhone
        }
      })

      await handle(req, res)

      expect(res._isEndCalled()).toBe(true)
      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            number: '123456789',
            brand: mockPhone.brand
          })
        })
      )
    })
  })

  describe('GET /api/phones', () => {
    it('should get all phones', async () => {
      const { req, res } = createMocks({
        method: 'GET'
      })

      await handle(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(
        expect.objectContaining({ success: true })
      )
    })

    it('should be more than one long', async () => {
      const { req, res } = createMocks({
        method: 'GET'
      })

      await handle(req, res)

      expect(res._getJSONData().data.length).toBeGreaterThan(0)
    })

    it('should respond with error', async () => {
      const { req, res } = createMocks({
        method: 'PUT'
      })

      await handle(req, res)

      expect(res._getStatusCode()).toBe(400)
    })
  })

  describe('GET /api/phones/:number', () => {
    it('should get a phone by number', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          number: '123456789'
        }
      })

      await handlePhone(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            number: '123456789'
          })
        })
      )
    })

    it('should respond with error', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        params: {
          number: 'xxxxxxxx'
        }
      })

      await handlePhone(req, res)

      expect(res._getStatusCode()).toBe(400)
    })
  })

  describe('PUT /api/phones/:number', () => {
    it('should edit a phone', async () => {
      const mockPhone = {
        number: '987654321',
        brand: mockBrands[Math.floor(Math.random() * mockBrands.length)]
      }

      const { req, res } = createMocks({
        method: 'PUT',
        query: {
          number: '123456789'
        },
        body: {
          data: mockPhone
        }
      })

      await handlePhone(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            number: '987654321',
            brand: mockPhone.brand
          })
        })
      )
    })

    it('should respond with error', async () => {
      const { req, res } = createMocks({
        method: 'PUT',
        query: {
          number: 'xxxxxxxx'
        },
        body: {
          data: {}
        }
      })

      await handlePhone(req, res)

      expect(res._getStatusCode()).toBe(400)
    })
  })

  describe('DELETE /api/phones/:number', () => {
    it('should delete a phone', async () => {
      const { req, res } = createMocks({
        method: 'DELETE',
        query: {
          number: '987654321'
        }
      })

      await handlePhone(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._getJSONData()).toEqual(
        expect.objectContaining({
          success: true
        })
      )
    })

    it('should respond with error', async () => {
      const { req, res } = createMocks({
        method: 'DELETE',
        query: {
          number: 'xxxxxxxx'
        }
      })

      await handlePhone(req, res)

      expect(res._getStatusCode()).toBe(400)
    })
  })
})
