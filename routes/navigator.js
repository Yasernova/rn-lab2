/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import PostsScreen from '../containers/posts';
import PostDetailsScreen from '../containers/postDetails';
import ProfileScreen from '../containers/profile';
import { colors } from '../Theme';

const homeStack = createStackNavigator(
  {
    posts: PostsScreen,
    postDetails: PostDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        height: 80,
      },
    },
  },
);

const tabs = createBottomTabNavigator(
  {
    HOME: homeStack,
    PROFILE: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return (
          <FontAwesome
            name={routeName === 'HOME' ? 'home' : 'user'}
            color={tintColor}
            size={20}
          />
        );
      },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        fontWeight: '900',
      },
      style: {
        backgroundColor: colors.accent,
      },
      activeTintColor: colors.white,
      inactiveTintColor: colors.primary,
    },
  },
);

const navigation = createStackNavigator({ tabs }, { defaultNavigationOptions: { header: null } });

export default createAppContainer(navigation);
