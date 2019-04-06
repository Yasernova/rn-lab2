/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  Text, View, ScrollView, Image, StyleSheet, TouchableOpacity,
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

export default class postDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>DETAILS</Text>
      </View>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.headerTitleContainer}>
        <FontAwesome name="chevron-left" size={20} color="#fff" />
        <Text style={[styles.headerTitle, { fontSize: 16 }]}>BACK</Text>
      </TouchableOpacity>
    ),
  })

  render() {
    const { navigation } = this.props;
    const post = navigation.getParam('post');
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
}
