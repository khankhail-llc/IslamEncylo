import React from 'react';
import { View, Text, Image } from 'react-native';

import HeaderImage from '../../assets/images/reciterImages/a_rehman/a_rehman.png';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './style.ts';

export default function Header(): JSX.Element {
  const style = useThemedStyles(styles);

  return (
    <View style={style.Container}>
      <Text style={style.QuranHeadingStyle}>Quran</Text>
      <Image style={style.imgStyle} source={HeaderImage} />
    </View>
  );
}
