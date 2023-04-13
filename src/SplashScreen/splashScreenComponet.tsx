import React, { useState, useEffect } from 'react';
import { View, Animated, ImageBackground } from 'react-native';
import styles from './style';

function SplashScreenComponent(): JSX.Element {
  const [scaleValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [scaleValue]);

  const animatedStyle = {
    transform: [
      {
        scale: scaleValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 4, 5.5],
        }),
      },
    ],
  };
  return (
    <ImageBackground
          source={require('../../assets/splash.jpg')}
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
