/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';

const Tab = createBottomTabNavigator();

function MyTabs(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
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
          tabBarIcon: () => (
            <Ionicons name="rocket" color="red" size={44} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;
