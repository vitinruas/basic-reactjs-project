import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Home } from '.'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'

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
  {
    id: 4,
    title: 'any_title_4',
    body: 'any_body_4',
    userId: 4,
  },
  {
    id: 5,
    title: 'any_title_5',
    body: 'any_body_5',
    userId: 5,
  },
  {
    id: 6,
    title: 'any_title_6',
    body: 'any_body_6',
    userId: 6,
  },
  {
    id: 7,
    title: 'any_title_7',
    body: 'any_body_7',
    userId: 7,
  },
  {
    id: 8,
    title: 'any_title_8',
    body: 'any_body_8',
    userId: 8,
  },
  {
    id: 9,
    title: 'any_title_9',
    body: 'any_body_9',
    userId: 9,
  },
  {
    id: 10,
    title: 'any_title_10',
    body: 'any_body_10',
    userId: 10,
  },
  {
    id: 11,
    title: 'any_title_11',
    body: 'any_body_11',
    userId: 11,
  },
  {
    id: 12,
    title: 'any_title_12',
    body: 'any_body_12',
    userId: 12,
  },
  {
    id: 13,
    title: 'any_title_13',
    body: 'any_body_13',
    userId: 13,
  },
  {
    id: 14,
    title: 'any_title_14',
    body: 'any_body_14',
    userId: 14,
  },
  {
    id: 15,
    title: 'any_title_15',
    body: 'any_body_15',
    userId: 15,
  },
  {
    id: 16,
    title: 'any_title_16',
    body: 'any_body_16',
    userId: 16,
  },
  {
    id: 17,
    title: 'any_title_17',
    body: 'any_body_17',
    userId: 17,
  },
  {
    id: 18,
    title: 'any_title_18',
    body: 'any_body_18',
    userId: 18,
  },
  {
    id: 19,
    title: 'any_title_19',
    body: 'any_body_19',
    userId: 19,
  },
  {
    id: 20,
    title: 'any_title_20',
    body: 'any_body_20',
    userId: 20,
  },
  {
    id: 21,
    title: 'any_title_21',
    body: 'any_body_21',
    userId: 21,
  },
  {
    id: 22,
    title: 'any_title_22',
    body: 'any_body_22',
    userId: 22,
  },
  {
    id: 23,
    title: 'any_title_23',
    body: 'any_body_23',
    userId: 23,
  },
  {
    id: 24,
    title: 'any_title_24',
    body: 'any_body_24',
    userId: 24,
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
  {
    albumId: 4,
    id: 4,
    title: 'any_title_4',
    url: 'any_url_4',
    thumbnailUrl: 'any_thumbnail_url_4',
  },
  {
    albumId: 5,
    id: 5,
    title: 'any_title_5',
    url: 'any_url_5',
    thumbnailUrl: 'any_thumbnail_url_5',
  },
  {
    albumId: 6,
    id: 6,
    title: 'any_title_6',
    url: 'any_url_6',
    thumbnailUrl: 'any_thumbnail_url_6',
  },
  {
    albumId: 7,
    id: 7,
    title: 'any_title_7',
    url: 'any_url_7',
    thumbnailUrl: 'any_thumbnail_url_7',
  },
  {
    albumId: 8,
    id: 8,
    title: 'any_title_8',
    url: 'any_url_8',
    thumbnailUrl: 'any_thumbnail_url_8',
  },
  {
    albumId: 9,
    id: 9,
    title: 'any_title_9',
    url: 'any_url_9',
    thumbnailUrl: 'any_thumbnail_url_9',
  },
  {
    albumId: 10,
    id: 10,
    title: 'any_title_10',
    url: 'any_url_10',
    thumbnailUrl: 'any_thumbnail_url_10',
  },
  {
    albumId: 11,
    id: 11,
    title: 'any_title_11',
    url: 'any_url_11',
    thumbnailUrl: 'any_thumbnail_url_11',
  },
  {
    albumId: 12,
    id: 12,
    title: 'any_title_12',
    url: 'any_url_12',
    thumbnailUrl: 'any_thumbnail_url_12',
  },
  {
    albumId: 13,
    id: 13,
    title: 'any_title_13',
    url: 'any_url_13',
    thumbnailUrl: 'any_thumbnail_url_13',
  },
  {
    albumId: 14,
    id: 14,
    title: 'any_title_14',
    url: 'any_url_14',
    thumbnailUrl: 'any_thumbnail_url_14',
  },
  {
    albumId: 15,
    id: 15,
    title: 'any_title_15',
    url: 'any_url_15',
    thumbnailUrl: 'any_thumbnail_url_15',
  },
  {
    albumId: 16,
    id: 16,
    title: 'any_title_16',
    url: 'any_url_16',
    thumbnailUrl: 'any_thumbnail_url_16',
  },
  {
    albumId: 17,
    id: 17,
    title: 'any_title_17',
    url: 'any_url_17',
    thumbnailUrl: 'any_thumbnail_url_17',
  },
  {
    albumId: 18,
    id: 18,
    title: 'any_title_18',
    url: 'any_url_18',
    thumbnailUrl: 'any_thumbnail_url_18',
  },
  {
    albumId: 19,
    id: 19,
    title: 'any_title_19',
    url: 'any_url_19',
    thumbnailUrl: 'any_thumbnail_url_19',
  },
  {
    albumId: 20,
    id: 20,
    title: 'any_title_20',
    url: 'any_url_20',
    thumbnailUrl: 'any_thumbnail_url_20',
  },
  {
    albumId: 21,
    id: 21,
    title: 'any_title_21',
    url: 'any_url_21',
    thumbnailUrl: 'any_thumbnail_url_21',
  },
  {
    albumId: 22,
    id: 22,
    title: 'any_title_22',
    url: 'any_url_22',
    thumbnailUrl: 'any_thumbnail_url_22',
  },
  {
    albumId: 23,
    id: 23,
    title: 'any_title_23',
    url: 'any_url_23',
    thumbnailUrl: 'any_thumbnail_url_23',
  },
  {
    albumId: 24,
    id: 24,
    title: 'any_title_24',
    url: 'any_url_24',
    thumbnailUrl: 'any_thumbnail_url_24',
  },
]

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(ctx.json(fakePosts))
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
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
  test('Should render posts correctly', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText(/there is not anything/i)

    expect(noMorePosts).toBeInTheDocument()

    expect.assertions(7)

    await waitForElementToBeRemoved(noMorePosts, { timeout: 500 })

    const images = screen.getAllByRole('img', { name: /any_title/i })
    expect(images).toHaveLength(12)

    expect(images[0]).toHaveAttribute('src', 'any_url_1')
    expect(images[1]).toHaveAttribute('src', 'any_url_2')
    expect(images[2]).toHaveAttribute('src', 'any_url_3')

    const titles = screen.getAllByRole('heading', { name: /any_title/i })
    expect(titles).toHaveLength(12)

    const descriptions = screen.getAllByText(/any_body/i)
    expect(descriptions).toHaveLength(12)
  })

  test('Should render search', async () => {
    render(<Home />)
    const search = screen.getByPlaceholderText(/type to look for something/i)

    expect(search).toBeInTheDocument()
  })

  test('Should load more 12 posts if the button load more posts is clicked', async () => {
    render(<Home />)

    const noMorePosts = screen.getByText(/there is not anything/i)

    expect(noMorePosts).toBeInTheDocument()

    await waitForElementToBeRemoved(noMorePosts, { timeout: 1000 })
    expect(screen.getAllByRole('heading', { name: /any_title/i })).toHaveLength(12)

    const loadMorePosts = screen.getByRole('button', { name: /load more posts/i })

    userEvent.click(loadMorePosts)

    expect(screen.getAllByRole('heading', { name: /any_title/i })).toHaveLength(24)
  })
})
