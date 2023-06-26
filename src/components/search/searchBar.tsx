import React from 'react';
import { TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './style.ts';

type searchBarProps = {
  searchSurah: string;

  // eslint-disable-next-line no-unused-vars
  setSearchSurah: (surah: string) => void;
};

function SearchBar(props: searchBarProps) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const { searchSurah, setSearchSurah } = props;

  return (
    <View style={style.searchBarContainer}>
      <View style={style.iconContainer}>
        <MaterialIcons name="search" size={20} color={theme.colors.SEARCHBAR} />
      </View>
      <TextInput
        style={style.SearchBarStyle}
        placeholder="Search"
        value={searchSurah}
        onChangeText={setSearchSurah}
        placeholderTextColor={theme.colors.SEARCHBAR}
      />
    </View>
  );
}

export default SearchBar;
