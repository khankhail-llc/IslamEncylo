/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect, createContext } from 'react';

import HomeScreen from './src/screens/HomeScreen/HomeScreen.tsx';
import MySplashScreen from './src/splashScreen/SplashScreen.tsx';
import ThemeProvider from './src/theming/ThemeProvider.tsx';

const Stack = createNativeStackNavigator();

const ThemeContext = createContext({});

function App() {
  const [isSplashShow, setIsSplashShow] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsSplashShow(false);
    }, 2000);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSplashShow ? (
            <Stack.Screen
              name="Splash"
              component={MySplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
export { ThemeContext };
