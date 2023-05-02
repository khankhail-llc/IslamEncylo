import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../colors/myColors.tsx';
import HomeScreen from '../screens/HomeScreens/HomeScreen.tsx';

const Tab = createBottomTabNavigator();

function MyTabs(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          borderTopColor: COLORS.Dark_YELLOW,
          paddingTop: 10,
          borderTopWidth: 1,
          backgroundColor: COLORS.Dark_YELLOW,
        },
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.DARK_GARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Entypo name="home" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="open-Book"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Feather name="book-open" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Praying-hands"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <FontAwesome5 name="praying-hands" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="More info"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
