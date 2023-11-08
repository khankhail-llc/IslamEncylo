import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import BackGroundImage from '../../assets/images/coverImages/launchScreen.jpeg';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './style.ts';

function MainScreen() {
  const style = useThemedStyles(styles as never);
  const theme = useTheme();

  const navigation = useNavigation();

  const handleQuranTilawaat = () => {
    navigation.navigate('Home' as never);
  };
  const handleYtVideo = () => {
    navigation.navigate('ytScreens' as never);
  };

  const handleNextScreen = () => {
    navigation.navigate('Setting' as never);
  };

  const header = () => (
    <View style={style.Container}>
      <Text style={style.QuranHeadingStyle}>Islam Encyclo</Text>
      <TouchableOpacity onPress={handleNextScreen}>
        <Icon
          name="settings"
          size={30}
          color={theme.colors.SEARCHBAR}
          style={style.settingIconStyle}
        />
      </TouchableOpacity>
    </View>
  );

  const ScreenBtns = () => {
    return (
      <View style={{ paddingTop: 20 }}>
        <Text
          style={[
            style.QuranHeadingStyle,
            {
              marginLeft: 25,
              width: '30%',
            },
          ]}
        >
          Categories
        </Text>
        <View style={style.btnsContainerStyle}>
          <View style={style.btnsView}>
            <TouchableOpacity onPress={handleQuranTilawaat}>
              <Text style={style.btnsTextStyle}>Quran Tilawaat</Text>
            </TouchableOpacity>
          </View>
          <View style={style.btnsView}>
            <TouchableOpacity onPress={handleYtVideo}>
              <Text style={style.btnsTextStyle}>Islamic Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ImageBackground source={BackGroundImage} style={style.backgroundImage}>
      <View>
        {header()}
        {ScreenBtns()}
      </View>
    </ImageBackground>
  );
}

export default MainScreen;
