import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import HeaderImage from '../../assets/images/reciterImages/a_rehman/a_rehman.png';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './style.ts';

export default function Header() {
  const navigation = useNavigation();
  const style = useThemedStyles(styles);

  const handleNextScreen = () => {
    navigation.navigate('Setting' as never);
  };

  return (
    <View style={style.Container}>
      <Text style={style.QuranHeadingStyle}>Quran</Text>
      <TouchableOpacity onPress={handleNextScreen}>
        <Image style={style.imgStyle} source={HeaderImage} />
      </TouchableOpacity>
    </View>
  );
}
