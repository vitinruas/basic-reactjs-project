import IPost from '../interfaces/post-interface'

const loadPosts = async (): Promise<IPost[]> => {
  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
  const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos')

  const [postsResponse, photoResponse] = await Promise.all([postsPromise, photosPromise])
  const postData = await postsResponse.json()
  const photoData = await photoResponse.json()

  // zipper
  const photoWithPosts = postData.map((post: IPost, index: number): IPost => {
    return { ...post, photo: photoData[index].url }
  })
  return photoWithPosts
}

export { loadPosts }
