import { render, screen } from '@testing-library/react'
import { PostCard } from '.'
import IPost from '../../interfaces/post-interface'

const fakePost: IPost = {
  id: 1,
  title: 'any_title',
  body: 'any_body',
  photo: 'any_photo',
  userId: 2,
}

describe('<PostCard />', () => {
  test('Must render PostCard correctly', () => {
    render(<PostCard post={fakePost} />)

    const img = screen.getByRole('img', { name: fakePost.title })
    const title = screen.getByRole('heading', { name: fakePost.title })
    const paragraph = screen.getByText(/any_body/)

    expect(img).toHaveAttribute('src', fakePost.photo)
    expect(title).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
  })

  test('Must match snapshot', () => {
    const { container } = render(<PostCard post={fakePost} />)
    expect(container['firstChild']).toMatchSnapshot()
  })
})
