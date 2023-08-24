import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text, View, Switch, ImageBackground, SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BackgroundImage from '../../assets/images/coverImages/launchScreen.jpeg';
import BackgroundImageL from '../../assets/images/coverImages/launchScreenL.png';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './styles.ts';

function SettingScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const handleBackPress = () => {
    navigation.goBack();
  };

  const backgroundImage = theme.isLightTheme === true ? BackgroundImageL : BackgroundImage;

  return (
    <ImageBackground source={backgroundImage} style={style.backgroundImage}>
      <SafeAreaView>
        <View style={style.headerStyle}>
          <Ionicons
            name="arrow-back"
            size={theme.typography.size.L}
            color={theme.colors.SEARCHBAR}
            onPress={handleBackPress}
          />
          <Text style={style.headerText}>Setting</Text>
        </View>
        <View style={style.container}>
          <Text style={style.textStyle}>{theme.isLightTheme ? 'Dark' : 'Light'}</Text>
          <Switch value={theme.isLightTheme} onValueChange={theme.toggleTheme} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default SettingScreen;
