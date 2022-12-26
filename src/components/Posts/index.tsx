import "./styles.css";
import IPost from "../../pages/post-interface";
import { PostCard } from "../PostCard";
import { HandlerButton } from "../Button";

interface IPostsProps {
  posts: IPost[];
  isItOver: boolean;
  loadMorePosts: () => void;
}

const Posts = ({ posts, isItOver, loadMorePosts }: IPostsProps) => {
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <HandlerButton handleOnClick={loadMorePosts} toDisable={isItOver} />
    </>
  );
};

export { Posts };
