import React from 'react';
import { StatusBar } from 'react-native';
import App from './routes/navigator';
import { PostsProvider } from './contexts/posts';

export default () => (
  <PostsProvider>
    <StatusBar barStyle="light-content" />
    <App />
  </PostsProvider>
);
