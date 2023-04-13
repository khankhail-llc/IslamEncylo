/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import SplashScreenComponent from './src/SplashScreen/splashScreenComponet';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    const timeOutId = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="SplashScreenAnimation"
      >
        {showSplashScreen ? (
          <Stack.Screen name="SplashScreen" component={SplashScreenComponent} />
        ) : (
          <Stack.Screen name="HomeScren" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
