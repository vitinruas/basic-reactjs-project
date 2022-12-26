import IPost from "../pages/post-interface";

const loadMorePosts = (
  currentLoad: number,
  postsPerLoad: number,
  posts: IPost[],
  allPosts: IPost[]
) => {
  const newCurrentLoad = currentLoad + postsPerLoad; // 0 -> 6, 6 -> 12
  const newLoadedPosts = [
    ...posts,
    ...allPosts.slice(newCurrentLoad, newCurrentLoad + postsPerLoad),
  ]; // now there are 12 posts to be showed up, next time there will be 18

  return { newCurrentLoad, newLoadedPosts };
};

export { loadMorePosts };
