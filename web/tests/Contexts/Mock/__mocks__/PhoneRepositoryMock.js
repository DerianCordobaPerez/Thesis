import { createMocks } from 'node-mocks-http'
import handle from 'pages/api/phones'
import handlePhone from 'pages/api/phones/[number]'

export class PhoneRepositoryMock {
  #mockBrands = ['TIGO', 'CLARO', 'MOVISTAR', 'OTHER']
  #defaultNumber = '123456789'
  #defaultEditNumber = '987654321'

  async assertRespondWithErrorForGetPhones () {
    const { req, res } = createMocks({
      method: 'PUT'
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(400)
  }

  async assertCreatePhone () {
    const mockPhone = {
      number: this.#defaultNumber,
      brand: this.#mockBrands[Math.floor(Math.random() * this.#mockBrands.length)]
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
          number: this.#defaultNumber,
          brand: mockPhone.brand
        })
      })
    )
  }

  async assertGetAllPhones () {
    const { req, res } = createMocks({
      method: 'GET'
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toEqual(
      expect.objectContaining({ success: true })
    )
  }

  async assertGetAllPhoneGreaterThanOne () {
    const { req, res } = createMocks({
      method: 'GET'
    })

    await handle(req, res)

    expect(res._getJSONData().data.length).toBeGreaterThan(0)
  }

  async assertGetPhoneByNumber () {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        number: this.#defaultNumber
      }
    })

    await handlePhone(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toEqual(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({
          number: this.#defaultNumber
        })
      })
    )
  }

  async assertRespondWithErrorForGetPhoneByNumber () {
    const { req, res } = createMocks({
      method: 'GET'
    })

    await handlePhone(req, res)

    expect(res._getStatusCode()).toBe(400)
  }

  async assertEditPhoneByNumber () {
    const mockPhone = {
      number: this.#defaultEditNumber,
      brand: this.#mockBrands[Math.floor(Math.random() * this.#mockBrands.length)]
    }

    const { req, res } = createMocks({
      method: 'PUT',
      query: {
        number: this.#defaultNumber
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
          number: this.#defaultEditNumber,
          brand: mockPhone.brand
        })
      })
    )
  }

  async assertRespondWithErrorForEditPhoneByNumber () {
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
  }

  async assertDeletePhoneByNumber () {
    const { req, res } = createMocks({
      method: 'DELETE',
      query: {
        number: this.#defaultEditNumber
      }
    })

    await handlePhone(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toEqual(
      expect.objectContaining({
        success: true
      })
    )
  }

  async assertRespondWithErrorForDeletePhoneByNumber () {
    const { req, res } = createMocks({
      method: 'DELETE',
      query: {
        number: 'xxxxxxxx'
      }
    })

    await handlePhone(req, res)

    expect(res._getStatusCode()).toBe(400)
  }
}
