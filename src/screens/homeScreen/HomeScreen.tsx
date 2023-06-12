import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';

import BackGroundImage from '../../assets/images/coverImages/launchScreen.png';
import SearchBar from '../../components/search/searchBar.tsx';
import Header from '../screenHeader/header.tsx';
import RenderSurahList from '../surahListData/renderSurahData.tsx';

import styles from './style.ts';

function HomeScreen() {
  const [searchSurah, setSearchSurah] = useState('');

  const handleSearchSurah = (surah: string) => {
    setSearchSurah(surah);
  };

  return (
    <ImageBackground source={BackGroundImage} style={styles.backgroundImage}>
      <View style={styles.mainContainer}>
        <Header />
        <SearchBar searchSurah={searchSurah} setSearchSurah={handleSearchSurah} />
        <RenderSurahList searchSurah={searchSurah} />
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
