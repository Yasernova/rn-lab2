/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
  Text, View, ScrollView, TouchableOpacity,
  FlatList, StyleSheet, ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { colors, metrics } from '../Theme';

import Post from '../components/Post';


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
});

export default function Posts({ navigation }) {

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);


  const renderItem = ({ item }) => {
    return (
      <Post post={item} onPress={() => navigation.navigate('PostDetails', { post: item })} />
    );
  }

  const getPosts = async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      setPosts((await response.json()).slice(0, 20));
    }
    setLoading(false);
  }
  console.log(posts)
  return (
    <View style={styles.container}>
      {
        posts.length
          ? (
            <FlatList
              data={posts}
              style={styles.posts}
              renderItem={renderItem}
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
    </View>
  );
};