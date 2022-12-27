import { HandlerButton } from '.'
import { fireEvent, render, screen } from '@testing-library/react'
describe('<Button />', () => {
  test('Must render the button with the text with text "Load more Posts"', () => {
    render(<HandlerButton text="Load more Posts" />)

    const button = screen.getByRole('button', { name: /Load more Posts/ })

    expect(button).toBeInTheDocument()
  })

  test('Must call function on button click"', () => {
    const fn = jest.fn()
    render(<HandlerButton text="Load more Posts" handleOnClick={fn} />)

    const button = screen.getByRole('button', { name: /Load more Posts/ })
    fireEvent.click(button)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('Must be disabled when disabled is true"', () => {
    render(<HandlerButton text="Load more Posts" toDisable={true} />)

    const button = screen.getByRole('button', { name: /Load more Posts/ })

    expect(button).toBeDisabled()
  })

  test('Must be disabled when disabled is false"', () => {
    render(<HandlerButton text="Load more Posts" toDisable={false} />)

    const button = screen.getByRole('button', { name: /Load more Posts/ })

    expect(button).toBeEnabled()
  })
})
