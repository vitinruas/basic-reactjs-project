import { render } from '@testing-library/react'
import { Home } from '.'

describe('<Home />', () => {
  test('Should render search', () => {
    render(<Home />)
  })
})
