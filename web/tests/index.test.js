import Index from '../pages/index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Index page', () => {
  it('Renders index page unchanged', () => {
    const { container } = render(<Index />)
    expect(container).toMatchSnapshot()
  })

  it('Renders a heading', () => {
    const { getByRole } = render(<Index />)

    const heading = getByRole('heading', {
      name: 'Welcome to Next.js!'
    })

    expect(heading).toBeInTheDocument()
  })
})
