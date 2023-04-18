import React, { useState, useEffect } from 'react';
import { View, Animated, ImageBackground } from 'react-native';
import styles from './style';

function SplashScreenComponent(): JSX.Element {
  const [scaleValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, 50);
    return () => { clearTimeout(timer); };
  }, [scaleValue]);

  const animatedStyle = {
    transform: [
      {
        scale: scaleValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 1, 5],
        }),
      },
    ],
  };
  return (
    <ImageBackground
          source={require('../../assets/Splash.jpg')}
          style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Animated.Text
              style={[styles.text, animatedStyle]}
        >
          Islam Encyclo

        </Animated.Text>
      </View>
    </ImageBackground>
  );
}

export default SplashScreenComponent;
