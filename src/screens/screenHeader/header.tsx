import React from 'react';
import { View, Text, Image } from 'react-native';

import HeaderImage from '../../assets/images/reciterImages/a_rehman/a_rehman.png';

import styles from './style.ts';

export default function Header(): JSX.Element {
  return (
    <View style={styles.Container}>
      <Text style={styles.QuranHeadingStyle}>Quran</Text>
      <Image style={styles.imgStyle} source={HeaderImage} />
    </View>
  );
}
