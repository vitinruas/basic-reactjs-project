import { render, screen } from '@testing-library/react'
import { Posts } from '.'

const fakeProps = {
  posts: [
    {
      id: 1,
      title: 'any_title_1',
      body: 'any_body_1',
      photo: 'any_photo_1',
      userId: 1,
    },
    {
      id: 2,
      title: 'any_title_2',
      body: 'any_body_2',
      photo: 'any_photo_2',
      userId: 2,
    },
  ],
  isItOver: false,
  loadMorePosts: () => {},
}

describe('<Posts />', () => {
  test('Should render <Posts />', async () => {
    render(<Posts {...fakeProps} />)

    const titleArray = screen.getAllByRole('heading', { name: /title/i })
    const imgArray = screen.getAllByRole('img', { name: /any_title/i })
    const bodyArray = await screen.findAllByText(/body/i)

    expect(titleArray).toHaveLength(2)
    expect(imgArray).toHaveLength(2)
    expect(bodyArray).toHaveLength(2)

    expect(screen.getByRole('img', { name: /any_title_1/i })).toHaveAttribute('src', 'any_photo_1')
  })

  test('Should not render posts', async () => {
    render(<Posts loadMorePosts={fakeProps.loadMorePosts} isItOver={fakeProps.isItOver} />)
    expect(screen.queryByRole('heading', { name: 'any_title_1' })).not.toBeInTheDocument()
  })

  test('Should match snapshot', async () => {
    const { container } = render(<Posts {...fakeProps} />)
    expect(container['firstChild']).toMatchSnapshot()
  })
})
