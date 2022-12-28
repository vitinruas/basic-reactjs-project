import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Home } from '.'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const fakePosts = [
  {
    id: 1,
    title: 'any_title_1',
    body: 'any_body_1',
    userId: 1,
  },
  {
    id: 2,
    title: 'any_title_2',
    body: 'any_body_2',
    userId: 2,
  },
  {
    id: 3,
    title: 'any_title_3',
    body: 'any_body_3',
    userId: 3,
  },
]

const fakePhotos = [
  {
    albumId: 1,
    id: 1,
    title: 'any_title_1',
    url: 'any_url_1',
    thumbnailUrl: 'any_thumbnail_url_1',
  },
  {
    albumId: 2,
    id: 2,
    title: 'any_title_2',
    url: 'any_url_2',
    thumbnailUrl: 'any_thumbnail_url_2',
  },
  {
    albumId: 3,
    id: 3,
    title: 'any_title_3',
    url: 'any_url_3',
    thumbnailUrl: 'any_thumbnail_url_3',
  },
]

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    console.log('posts')
    return res(ctx.json(fakePosts))
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    console.log('photos')
    return res(ctx.json(fakePhotos))
  }),
]

const server = setupServer(...handlers)

describe('<Home />', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })
  test('Should render posts', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText(/there is not anything/i)

    expect(noMorePosts).toBeInTheDocument()

    await waitForElementToBeRemoved(noMorePosts, { timeout: 500 })
    screen.debug()
  })
})
