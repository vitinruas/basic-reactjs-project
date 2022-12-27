import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from '.'

const fakeProps = {
  value: 'any_value',
  handleOnChange: jest.fn(),
}

interface IHTMLElement extends HTMLElement {
  value: any
}
describe('<Search />', () => {
  test('Should exists a value', () => {
    render(<Search {...fakeProps} />)

    const input = screen.getByPlaceholderText(/search for something/i)

    expect((input as IHTMLElement).value).toBe('any_value')
  })
  test('Should call handleChange function on each key pressed', () => {
    const { debug } = render(<Search value="" handleOnChange={fakeProps.handleOnChange} />)
    const input = screen.getByPlaceholderText(/search for something/i)
    const value = 'value_typed'
    userEvent.type(input, value)

    expect(fakeProps.handleOnChange).toHaveBeenCalledTimes(value.length)
  })
})
