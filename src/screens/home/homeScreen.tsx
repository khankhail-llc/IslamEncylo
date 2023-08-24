import React, { useState } from 'react';
import {
  ImageBackground, SafeAreaView, StatusBar, StatusBarStyle,
} from 'react-native';

import BackGroundImage from '../../assets/images/coverImages/launchScreen.jpeg';
import BackGroundImageL from '../../assets/images/coverImages/launchScreenL.png';
import SearchBar from '../../components/search/searchBar.tsx';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';
import Header from '../screenHeader/header.tsx';
import RenderSurahList from '../surahListData/renderSurahData.tsx';

import styles from './style.ts';

function HomeScreen() {
  const [searchSurah, setSearchSurah] = useState('');

  const style = useThemedStyles(styles);
  const theme = useTheme();

  const handleSearchSurah = (surah: string) => {
    setSearchSurah(surah);
  };

  const statusBarStyle = theme.colors.STATUSBAR as StatusBarStyle;
  const backgroundImage = theme.isLightTheme === true ? BackGroundImageL : BackGroundImage;

  return (
    <ImageBackground source={backgroundImage} style={style.backgroundImage}>
      <SafeAreaView style={style.mainContainer}>
        <StatusBar barStyle={statusBarStyle} />
        <Header />
        <SearchBar searchSurah={searchSurah} setSearchSurah={handleSearchSurah} />
        <RenderSurahList searchSurah={searchSurah} />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomeScreen;
