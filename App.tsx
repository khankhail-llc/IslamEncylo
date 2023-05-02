/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect, createContext, useMemo } from 'react';

import MyTabs from './src/navigations/bottomTabs.tsx';
import MySplashScreen from './src/screens/splashAnimation/SplashScreen.tsx';

const Stack = createNativeStackNavigator();

const ThemeContext = createContext({});

function App() {
  const [isSplashShow, setIsSplashShow] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsSplashShow(false);
    }, 2000);
    return () => clearTimeout(timeOutId);
  }, []);

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <NavigationContainer>
        <Stack.Navigator>
          {isSplashShow ? (
            <Stack.Screen
              name="Splash"
              component={MySplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen name="Navigation" component={MyTabs} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
