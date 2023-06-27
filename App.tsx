/**
 * Islam Encyclo
 * React Native Powered App
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';

import HomeScreen from './src/screens/homeScreen/HomeScreen.tsx';
import SettingScreen from './src/screens/setting/settingScreen.tsx';
import JsSplashScreen from './src/splashScreen/splash.tsx';
import ThemeProvider from './src/theming/themeProvider.tsx';

const Stack = createNativeStackNavigator();
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
              component={JsSplashScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          )}
          <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
// export { ThemeContext };
