/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  Text, ScrollView, Image, StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { metrics } from '../Theme';

const styles = StyleSheet.create({
  image: {
    width: metrics.screenWidth - 20,
    height: 450,
    borderRadius: 30,
    alignSelf: 'center',
  },
  contentContainerStyle: {
    paddingVertical: 20,
    // alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    padding: 20,
  },
  headerTitle: {
    color: '#fff', fontSize: 30, fontWeight: '900', paddingHorizontal: 5,
  },
  headerTitleContainer: { flexDirection: 'row', alignItems: 'baseline', paddingHorizontal: 5 },
});

export default function postDetails({ route }) {
  const { post } = route.params;
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainerStyle}>
      <Image source={{ uri: 'https://picsum.photos/300/?random' }} style={styles.image} />
      <Text style={styles.title}>
        {post.title}
      </Text>
      <Text style={[styles.title, { fontWeight: '700' }]}>
        {post.body}
      </Text>
    </ScrollView>
  );

}
