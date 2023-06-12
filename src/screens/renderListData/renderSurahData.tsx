import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import COLORS from '../../colors/myColors.ts';
import surahList from '../../constants/listItems/surahList.ts';
import filterSurah from '../../utils/handle/filterSurah.tsx';

import styles from './style.ts';

export default function renderSurahList(searchSurah: string) {
  return (
    <FlatList
      data={filterSurah(surahList, searchSurah)}
      keyExtractor={(item) => item.surahNo.toString()}
      renderItem={({ item }) => (
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
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meaningtitle}>{item.meaning}</Text>
            </View>
            <Text style={styles.title}>{item.arabicTittle}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
