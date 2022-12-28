import IPost from '../../interfaces/post-interface'
import './styles.css'

interface IPostCardProps {
  post: IPost
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <div key={post.id} className="post">
      {post.id}
      <picture className="post-image">
        <img src={post.photo} alt={post.title} />
      </picture>
      <div key={post.id} className="post-content">
        <h3>{post.title}</h3>
        <p>Description: {post.body}</p>
      </div>
    </div>
  )
}
export { PostCard }
