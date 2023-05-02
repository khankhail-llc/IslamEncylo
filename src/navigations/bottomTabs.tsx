/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreens/HomeScreen.tsx';

const Tab = createBottomTabNavigator();

function MyTabs(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          borderTopColor: '#BDC5CD',
          paddingTop: 10,
          borderTopWidth: 1,
          backgroundColor: '#0986',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Entypo name="home" size={28} color="#FFFFFF" />,
        }}
      />
      <Tab.Screen
        name="ome"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Feather name="book-open" size={28} color="#766F63" />,
        }}
      />
      <Tab.Screen
        name="Hme"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FontAwesome5 name="praying-hands" size={28} color="#766F63" />,
        }}
      />
      <Tab.Screen
        name="Hom"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Feather name="more-horizontal" size={28} color="#766F63" />,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
