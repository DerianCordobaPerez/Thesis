import { render, screen } from '@testing-library/react'
import Index from 'pages/index'
import '@testing-library/jest-dom'
import { useSession } from 'next-auth/react'

jest.mock('next-auth/react', () => {
  const originalModule = jest
    .requireActual('next-auth/react')

  const mockSession = {
    expires: new Date(Date.now() + 2 + 86_400)
      .toISOString(),
    user: { username: 'test', email: 'test@test.com' }
  }

  return {
    _esModule: true,
    ...originalModule,
    useSession: jest.fn(() => ({
      data: mockSession,
      status: 'authenticated'
    }))
  }
})

describe('Auth session', () => {
  it('should render index page with session', () => {
    render(<Index />)

    expect(screen.getByText('Sign out'))
      .toBeInTheDocument()
  })

  it('should render index page without session', () => {
    useSession
      .mockImplementation(() => ({
        data: null,
        status: 'unauthenticated'
      }))

    render(<Index />)

    expect(screen.getByText('Sign in'))
      .toBeInTheDocument()
  })

  it('should render index page with session expired', () => {
    useSession
      .mockImplementation(() => ({
        data: {
          expires: new Date(Date.now() - 2 - 86_400)
            .toISOString(),
          user: { username: 'test', email: 'test@test.com' }
        },
        status: 'authenticated'
      }))

    render(<Index />)

    expect(screen.getByText('Sign out'))
      .toBeInTheDocument()
  })
})
