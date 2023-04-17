import React, { useContext } from 'react';
import {
  View, Text, Button, StyleSheet, StatusBar, ImageBackground,
} from 'react-native';

import { ThemeContext } from '../../App.tsx';
import darkImage from '../../assets/launchScreen.png';
import lightImage from '../../assets/sp.png';
import COLORS from '../colors/myColors.tsx';

function HomeScreen() {
  type ThemeContextType = {
    theme: string;
    // eslint-disable-next-line no-unused-vars
    setTheme: (theme: string) => void;
  };

  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <ImageBackground
      defaultSource={theme === 'dark' ? darkImage : lightImage}
      source={theme === 'dark' ? darkImage : lightImage}
      style={styles.imgStyles}
      resizeMode="cover"
    >
      <View style={styles.containerStyle}>
        <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
        <Text
          style={[styles.textStyles, { color: theme === 'dark' ? COLORS.WHITE : COLORS.BLACK }]}
        >
          HomeScreen
        </Text>
        <Button
          onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Change Theme"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imgStyles: {
    flex: 1,
  },
  textStyles: {
    fontSize: 50,
    marginTop: 60,
  },
});

export default HomeScreen;
