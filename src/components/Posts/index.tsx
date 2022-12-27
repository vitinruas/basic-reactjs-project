import "./styles.css";
import IPost from "../../interfaces/post-interface";
import { PostCard } from "../PostCard";
import { HandlerButton } from "../HandlerButton";

interface IPostsProps {
  posts: IPost[];
  isItOver: boolean;
  loadMorePosts: () => void;
}

const Posts = ({ posts, isItOver, loadMorePosts }: IPostsProps) => {
  return (
    <div className="posts">
      {posts && (
        <>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          <HandlerButton
            text="Load more Posts"
            handleOnClick={loadMorePosts}
            toDisable={isItOver}
          />
        </>
      )}
    </div>
  );
};

export { Posts };
