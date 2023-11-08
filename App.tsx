/**
 * Islam Encyclo
 * React Native Powered App
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';

import AudioScreen from './src/screens/audio/audioScreen.tsx';
import HomeScreen from './src/screens/home/homeScreen.tsx';
import MainScreen from './src/screens/mainScreen/index.tsx';
import SettingScreen from './src/screens/setting/settingScreen.tsx';
import JsSplashScreen from './src/splashScreen/splash.tsx';
import ThemeProvider from './src/theming/themeProvider.tsx';
import ytScreen from './src/screens/yotubeScreen/index.tsx';
import YtScreen from './src/screens/yotubeScreen/index.tsx';

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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSplashShow ? (
            <Stack.Screen name="Splash" component={JsSplashScreen} />
          ) : (
            <Stack.Screen name="MainScreen" component={MainScreen} />
          )}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AudioPlayer" component={AudioScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="ytScreens" component={YtScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
