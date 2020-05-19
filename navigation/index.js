import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'expo-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import PostDetails from '../screens/PostDetails';
import { colors } from '../Theme';

const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();
const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();


const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff', fontSize: 30, fontWeight: '900', paddingHorizontal: 5,
  },
  headerTitleContainer: { flexDirection: 'row', alignItems: 'baseline' }
})


const HomeStack = () => (

  <StackNavigator initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
    }}
  >
    <StackScreen
      name="Home"
      component={Posts}
      options={{
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>BLOGPOST</Text>
            <FontAwesome name="newspaper-o" size={30} color="#fff" />
          </View>
        ),
      }}
    />
    <StackScreen
      name="PostDetails"
      component={PostDetails}
      options={({ navigation }) => ({
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>DETAILS</Text>
          </View>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerTitleContainer}>
            <FontAwesome name="chevron-left" size={20} color="#fff" />
            <Text style={[styles.headerTitle, { fontSize: 16 }]}>BACK</Text>
          </TouchableOpacity>
        ),
      })}
    />
  </StackNavigator>
)



const RootNavigator = () => (
  <NavigationContainer>

    <TabNavigator
      initialRouteName="Posts"
      tabBarOptions={{
        inactiveTintColor: colors.white,
        activeTintColor: colors.accent,
        style: { backgroundColor: colors.primary },
        labelStyle: { fontSize: 20, fontFamily: 'Helvetica', fontWeight: '900' },
      }}
    >
      <TabScreen
        name="HOME"
        component={HomeStack}
        options={({ route: { name } }) => ({
          tabBarIcon: ({ tintColor }) => {
            return (
              <FontAwesome
                name={name === 'HOME' ? 'home' : 'user'}
                color={tintColor}
                size={20}
              />
            );
          }
        })
        }
      />
      <TabScreen name="PROFILE" component={Profile} />
    </TabNavigator>
  </NavigationContainer>
)


export default RootNavigator;