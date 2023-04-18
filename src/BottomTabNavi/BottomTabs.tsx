/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen/HomeScreen.tsx';

const Tab = createBottomTabNavigator();

function MyTabs(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          borderTopColor: '#BDC5CD',
          paddingTop: 9,
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="sadia"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FontAwesome5 name="book-open" size={26} />,
        }}
      />
      <Tab.Screen
        name="q"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FontAwesome5 name="book-open" size={26} />,
        }}
      />
      <Tab.Screen
        name="w"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FontAwesome5 name="book-open" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
