import "./styles.css";
import { Component } from "react";
// interfaces
import IPost from "../../interfaces/post-interface";
//components
import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { loadMorePosts } from "../../utils/load-more-posts";
import { Search } from "../../components/Search";

class Home extends Component {
  state: {
    posts: IPost[];
    allPosts: IPost[];
    currentLoad: number;
    postsPerLoad: number;
    searchValue: string;
  } = {
    posts: [],
    allPosts: [],
    currentLoad: 0,
    postsPerLoad: 12,
    searchValue: "",
  };

  async componentDidMount(): Promise<void> {
    await this.loadPosts();
  }

  loadPosts = async (): Promise<void> => {
    const allPosts: IPost[] = await loadPosts();
    this.setState({
      allPosts,
      posts: allPosts.slice(0, 12),
    });
  };

  handleInput = (value: string) => {
    this.setState({
      searchValue: value,
    });
  };

  loadMorePosts = () => {
    const { posts, allPosts, currentLoad, postsPerLoad } = this.state;
    const { newCurrentLoad, newLoadedPosts } = loadMorePosts(
      currentLoad,
      postsPerLoad,
      posts,
      allPosts
    );
    this.setState({
      currentLoad: newCurrentLoad,
      posts: newLoadedPosts,
    });
  };

  render() {
    const { posts, allPosts, currentLoad, postsPerLoad, searchValue } =
      this.state;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    const isItOver = currentLoad + postsPerLoad >= allPosts.length;
    return (
      <div className="container">
        <Search value={searchValue} handleOnChange={this.handleInput} />

        <Posts
          posts={filteredPosts}
          isItOver={isItOver}
          loadMorePosts={this.loadMorePosts}
        />

        {filteredPosts.length === 0 && <span>There is not anything :(</span>}
      </div>
    );
  }
}

export { Home };
