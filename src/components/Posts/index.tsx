import './styles.css'
import IPost from '../../interfaces/post-interface'
import { PostCard } from '../PostCard'

interface IPostsProps {
  posts?: IPost[]
}

const Posts = ({ posts }: IPostsProps) => {
  return (
    <div className="posts">
      {posts && (
        <>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  )
}

export { Posts }
