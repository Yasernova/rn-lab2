/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
  Text, View, ScrollView, TouchableOpacity,
  FlatList, StyleSheet, ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { PostsConsumer } from '../contexts/posts';
import { colors, metrics } from '../Theme';

import Post from '../components/post';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    justifyContent: 'center',
  },
  posts: {
    padding: 20,
  },
  showBtnContiner: {
    alignItems: 'center',
    marginVertical: 100,
  },
  showBtn: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: metrics.screenWidth / 2,
    padding: 15,
    borderRadius: 30,
  },
  showBtnText: {
    color: '#fff',
    fontWeight: '900',
    fontFamily: 'Arial',
    fontSize: 22,
  },
  headerTitle: {
    color: '#fff', fontSize: 30, fontWeight: '900', paddingHorizontal: 5,
  },
  headerTitleContainer: { flexDirection: 'row', alignItems: 'baseline' },
});

class Posts extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>BLOGPOST</Text>
        <FontAwesome name="newspaper-o" size={30} color="#fff" />
      </View>
    ),
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <Post post={item} onPress={() => navigation.navigate('postDetails', { post: item })} />
    );
  }

  render() {
    const { posts, getPosts, loading } = this.props;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        {
          posts.length
            ? (
              <FlatList
                data={posts}
                style={styles.posts}
                renderItem={this.renderItem}
                keyExtractor={post => post.id.toString()}
              />
            )
            : (
              <View style={styles.showBtnContiner}>
                {
                  loading
                    ? <ActivityIndicator color={colors.primary} />
                    : (
                      <TouchableOpacity onPress={getPosts} style={styles.showBtn}>
                        <Text style={styles.showBtnText}>GET POSTS</Text>
                      </TouchableOpacity>
                    )
                }
              </View>
            )}
      </ScrollView>
    );
  }
}

export default class extends React.Component {
  static navigationOptions = Posts.navigationOptions;

  render() {
    const { navigation } = this.props;
    return (
      <PostsConsumer>
        {({ postsState: { posts, loading }, postsActions: { getPosts } }) => (
          <Posts
            posts={posts}
            getPosts={getPosts}
            loading={loading}
            navigation={navigation}
          />
        )}
      </PostsConsumer>
    );
  }
}
