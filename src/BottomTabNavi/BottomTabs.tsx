import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen/HomeScreen.tsx';

const Tab = createBottomTabNavigator();

function MyTabs(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          borderTopWidth: 1,
          backgroundColor: '#493719',
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Entypo name="home" size={28} color="#FFFFFF" />,
        }}
      />
      <Tab.Screen
        name="Juzz Index"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Feather name="book-open" size={28} color="#766F63" />,
        }}
      />
      <Tab.Screen
        name="Surah Index"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FontAwesome5 name="praying-hands" size={28} color="#766F63" />,
        }}
      />
      <Tab.Screen
        name="More"
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
