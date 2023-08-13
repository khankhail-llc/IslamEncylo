/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import {
  View, ImageBackground, Animated,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import launchScreen from '../assets/images/coverImages/launchScreen.jpeg';
import useThemedStyles from '../theming/useThemedStyles.ts';

import styles from './style.ts';

function JsSplashScreen(): JSX.Element {
  const style = useThemedStyles(styles);

  const sizeAnim = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      SplashScreen.hide();

      Animated.timing(sizeAnim, {
        toValue: 40,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, 400);
    return () => clearTimeout(timeOutId);
  }, [sizeAnim]);

  return (
    <ImageBackground
      defaultSource={launchScreen}
      source={launchScreen}
      style={style.imgStyles}
      resizeMode="cover"
    >
      <View style={style.containerStyles}>
        <Animated.Text style={[style.textStyles, { fontSize: sizeAnim }]}>
          Islam Encyclo
        </Animated.Text>
      </View>
    </ImageBackground>
  );
}

export default JsSplashScreen;
