import React, { createContext, PureComponent } from 'react';

const Posts = createContext();

export const PostsConsumer = Posts.Consumer;

export class PostsProvider extends PureComponent {
  state = {
    loading: false,
    posts: [],
  }

  actions = {
    getPosts: async () => {
      this.setState({ loading: true });
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (response.ok) {
        this.setState({ posts: (await response.json()).slice(0, 20) });
      }
      this.setState({ loading: false });
    },
  }

  render() {
    const { children } = this.props;
    return (
      <Posts.Provider value={{ postsState: { ...this.state }, postsActions: { ...this.actions } }}>
        {children}
      </Posts.Provider>
    );
  }
}
