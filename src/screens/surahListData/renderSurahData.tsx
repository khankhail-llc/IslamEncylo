import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import filterSurah from '../../components/search/filterSearch.tsx';
import surahList, { SurahItem } from '../../constants/surahName/surahList.ts';
import { Theme } from '../../theming/themeProvider.tsx';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles, { Styles } from './style.ts';

type SurahDataProps = {
  item: SurahItem;
  theme: Theme;
  style: Styles;
};

function SurahItemComponent({ item, theme, style }: SurahDataProps) {
  const navigation = useNavigation();

  const handleSurahPress = () => {
    navigation.navigate('AudioPlayer', { title: item.arabicTittle, surahNo: item.surahNo } as never);
  };

  return (
    <View style={style.contanier}>
      <TouchableOpacity style={style.itemContainer} onPress={handleSurahPress}>
        <View style={style.playButton}>
          <Entypo
            name="controller-play"
            size={24}
            color={theme.colors.SEARCHBAR}
            style={style.iconContainer}
          />
        </View>
        <View>
          <Text style={style.titleStyle}>{item.title}</Text>
          <Text style={style.meaningtitle}>{item.englishTitle}</Text>
        </View>
        <Text style={[style.titleStyle, style.arabicTitleStyle]}>{item.arabicTittle}</Text>
      </TouchableOpacity>
    </View>
  );
}

type RenderSurahListProps = {
  searchSurah: string;
};

function RenderSurahList({ searchSurah }: RenderSurahListProps) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const renderSurahItem = ({ item }: { item: SurahItem }) => (
    <SurahItemComponent item={item} theme={theme} style={style as unknown as Styles} />
  );

  return (
    <FlatList
      data={filterSurah(surahList, searchSurah)}
      keyExtractor={(item) => item.surahNo.toString()}
      renderItem={renderSurahItem}
    />
  );
}

export default RenderSurahList;
