import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeaderImage from '../../assets/images/reciterImages/a_rehman/a_rehman.jpeg';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './style.ts';
import useTheme from '../../theming/useTheme.ts';

export default function Header() {
  const navigation = useNavigation();
  const style = useThemedStyles(styles);
  const theme = useTheme();

  const handleOnPress = () => {
    navigation.navigate('MainScreen' as never);
  };

  return (
    <View style={style.Container}>
      <Icon
        name="arrow-back"
        size={30}
        color={theme.colors.SEARCHBAR}
        style={style.settingIconStyle}
        onPress={handleOnPress}
      />
      <Text style={style.QuranHeadingStyle}>Quran Tilawaat</Text>

      <Image style={style.imgStyle} source={HeaderImage} />
    </View>
  );
}
