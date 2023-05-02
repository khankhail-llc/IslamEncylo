import React from 'react';
import { View, Text, Image } from 'react-native';

import HeaderImage from '../../../assets/header.png';

import styles from './style.tsx';

export default function Header(): JSX.Element {
  return (
    <View style={styles.Container}>
      <Text style={styles.QuranHeadingStyle}>Quran</Text>
      <Image style={styles.imgStyle} source={HeaderImage} />
    </View>
  );
}
