/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import {
  View, ImageBackground, Animated, StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import launchScreen from '../../assets/launchScreen.png';

const YELLOW = 'yellow';

function JsSplashScreen(): JSX.Element {
  const sizeAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      SplashScreen.hide();

      Animated.timing(sizeAnim, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, 150);
    return () => clearTimeout(timeOutId);
  }, [sizeAnim]);

  return (
    <ImageBackground
      defaultSource={launchScreen}
      source={launchScreen}
      style={styles.imgStyles}
      resizeMode="cover"
    >
      <View style={styles.containerStyles}>
        <Animated.Text style={[styles.textStyles, { fontSize: sizeAnim }]}>
          Islam Encyclo
        </Animated.Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imgStyles: {
    flex: 1,
  },
  textStyles: {
    color: YELLOW,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default JsSplashScreen;
