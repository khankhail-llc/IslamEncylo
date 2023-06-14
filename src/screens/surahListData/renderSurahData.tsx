import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import COLORS from '../../colors/myColors.ts';
import filterSurah from '../../components/search/filterSearch.tsx';
import surahList, { SurahItem } from '../../constants/listItems/surahList.ts';

import styles from './style.ts';

type surahListProps = {
  searchSurah: string;
};

function SurahData({ item }: { item: SurahItem }) {
  return (
    <View style={styles.contanier}>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.playButton}>
          <Entypo
            name="controller-play"
            size={24}
            color={COLORS.WHITE}
            style={styles.iconContainer}
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.meaningtitle}>{item.meaning}</Text>
        </View>
        <Text style={[styles.titleStyle, styles.arabicTitleStyle]}>{item.arabicTittle}</Text>
      </TouchableOpacity>
    </View>
  );
}

function RenderSurahList({ searchSurah }: surahListProps) {
  return (
    <FlatList
      data={filterSurah(surahList, searchSurah)}
      keyExtractor={(item) => item.surahNo.toString()}
      renderItem={SurahData}
    />
  );
}

export default RenderSurahList;
