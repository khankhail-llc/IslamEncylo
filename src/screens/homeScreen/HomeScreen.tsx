import React from 'react';
import { TextInput, ImageBackground, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BackGroundImage from '../../assets/images/coverImages/launchScreen.png';
import COLORS from '../../colors/myColors.tsx';
import renderSurahList from '../renderListData/renderSurahData.tsx';
import Header from '../screenHeader/header.tsx';

import styles from './style.ts';

function HomeScreen() {
  const searchBar = () => (
    <View style={styles.searchBarContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="search" size={20} color={COLORS.WHITE} />
      </View>
      <TextInput
        style={styles.SearchBarStyle}
        placeholder="Search"
        placeholderTextColor={COLORS.WHITE}
      />
      <View style={[styles.iconContainer, styles.voiceIconStyle]}>
        <MaterialIcons name="keyboard-voice" size={20} color={COLORS.WHITE} />
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackGroundImage} style={styles.backgroundImage}>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.container}>{searchBar()}</View>
        <View style={styles.surahContainer}>{renderSurahList()}</View>
      </View>
    </ImageBackground>
  );
}
export default HomeScreen;
