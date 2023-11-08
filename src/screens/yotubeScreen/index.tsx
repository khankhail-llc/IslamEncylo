import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BackGroundImage from '../../assets/images/coverImages/launchScreen.jpeg';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './style.ts';

function YtScreen() {
  const style = useThemedStyles(styles as never);
  const theme = useTheme();

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('MainScreen' as never);
  };

  const header = () => (
    <View style={style.Container}>
      <Icon
        name="arrow-back"
        size={30}
        color={theme.colors.SEARCHBAR}
        style={style.settingIconStyle}
        onPress={handleOnPress}
      />
      <Text style={style.QuranHeadingStyle}>Youtube</Text>
    </View>
  );

  return (
    <ImageBackground source={BackGroundImage} style={style.backgroundImage}>
      <View>{header()}</View>
    </ImageBackground>
  );
}

export default YtScreen;
