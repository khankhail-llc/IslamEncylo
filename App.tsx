import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import SplashScreenComponent from './src/SplashScreen/splashScreenComponet';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
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
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
