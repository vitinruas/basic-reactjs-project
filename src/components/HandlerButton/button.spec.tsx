import { HandlerButton, IHandlerButtonProps } from '.'
import { fireEvent, render, screen } from '@testing-library/react'

const fakeProps: IHandlerButtonProps = {
  text: 'Load more Posts',
  handleOnClick: jest.fn(),
  toDisable: false,
}

describe('<Button />', () => {
  test('Should render the button with the text "Load more Posts"', () => {
    render(<HandlerButton {...fakeProps} />)

    const button = screen.getByRole('button', { name: fakeProps.text })

    expect(button).toBeInTheDocument()
  })

  test('Should call function if button has been clicked"', () => {
    render(<HandlerButton {...fakeProps} />)

    const button = screen.getByRole('button', { name: fakeProps.text })
    fireEvent.click(button)

    expect(fakeProps.handleOnClick).toHaveBeenCalledTimes(1)
  })

  test('Should be disabled when disabled is true"', () => {
    render(<HandlerButton {...fakeProps} toDisable={true} />)

    const button = screen.getByRole('button', { name: fakeProps.text })

    expect(button).toBeDisabled()
  })

  test('Should be enable when disabled is false"', () => {
    render(<HandlerButton {...fakeProps} />)

    const button = screen.getByRole('button', { name: fakeProps.text })

    expect(button).toBeEnabled()
  })
})
