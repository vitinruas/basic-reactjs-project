import IPost from '../interfaces/post-interface'

const loadMorePostsUtils = (currentLoad: number, postsPerLoad: number, posts: IPost[], allPosts: IPost[]) => {
  const newCurrentLoad = currentLoad + postsPerLoad // 0 -> 6, 6 -> 12
  // now there are 12 posts to be showed up, next time there will be 18
  const newLoadedPosts = [...posts, ...allPosts.slice(newCurrentLoad, newCurrentLoad + postsPerLoad)]
  return { newCurrentLoad, newLoadedPosts }
}

export { loadMorePostsUtils }
