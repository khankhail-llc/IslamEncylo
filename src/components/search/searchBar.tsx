import React from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../colors/myColors.ts';

import styles from './style.ts';

type searchBarProps = {
  searchSurah: string;

  // eslint-disable-next-line no-unused-vars
  setSearchSurah: (surah: string) => void;
};

function SearchBar(props: searchBarProps) {
  const { searchSurah, setSearchSurah } = props;

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="search" size={20} color={COLORS.WHITE} />
      </View>
      <TextInput
        style={styles.SearchBarStyle}
        placeholder="Search"
        value={searchSurah}
        onChangeText={setSearchSurah}
        placeholderTextColor={COLORS.WHITE}
      />
    </View>
  );
}

export default SearchBar;
