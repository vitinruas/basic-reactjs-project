import './styles.css'
// interfaces
import IPost from '../../interfaces/post-interface'
// components
import { loadPostsUtils } from '../../utils/load-posts'
import { Posts } from '../../components/Posts'
import { loadMorePostsUtils } from '../../utils/load-more-posts'
import { Search } from '../../components/Search'
import { useState, useEffect, useCallback } from 'react'
import { HandlerButton } from '../../components/HandlerButton'

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [allPosts, setAllPosts] = useState<IPost[]>([])
  const [currentLoad, setCurrentLoad] = useState<number>(0)
  const [postsPerLoad, setPostsPerLoad] = useState<number>(12)
  const [searchValue, setSearchValue] = useState<string>('')

  const loadPosts = useCallback(() => {
    const request = async () => {
      const allPosts = await loadPostsUtils()
      setAllPosts(allPosts)
      setPosts(allPosts.splice(0, 12))
    }
    request()
  }, [])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  const handleInput = (value: string): void => {
    setSearchValue(value)
  }

  const loadMorePosts = (): void => {
    const { newCurrentLoad, newLoadedPosts } = loadMorePostsUtils(currentLoad, postsPerLoad, posts, allPosts)
    setPosts(newLoadedPosts)
    setCurrentLoad(newCurrentLoad)
  }

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  const isItOver = currentLoad + postsPerLoad >= allPosts.length

  return (
    <div className="container">
      <Search value={searchValue} handleOnChange={handleInput} />

      <Posts posts={filteredPosts} />

      <HandlerButton text="Load more Posts" handleOnClick={loadMorePosts} toDisable={isItOver} />

      {!filteredPosts.length && <span>There is not anything :(</span>}
    </div>
  )
}

export { Home }
