import IPost from "../../pages/post-interface";
import "./styles.css";

interface IPostCardProps {
  post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <div key={post.id} className="post">
      {post.id}
      <picture className="post-image">
        <img src={post.photo} alt={post.title} />
      </picture>
      <div key={post.id} className="post-content">
        <strong>{post.title}</strong>
        <p>Description: {post.body}</p>
      </div>
    </div>
  );
};
export { PostCard };
