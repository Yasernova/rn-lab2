import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Product details
         </Text>
    </View>
  )
}

export default ProductDetails
