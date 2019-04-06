import React from 'react';
import {
  View, Image, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

export default ({ post, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Image
        source={{ uri: 'https://picsum.photos/300/?random' }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.title}
      >
        {post.title}
      </Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  image: {
    width: 300, height: 150, borderRadius: 30,
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    paddingVertical: 20,
  },
});
