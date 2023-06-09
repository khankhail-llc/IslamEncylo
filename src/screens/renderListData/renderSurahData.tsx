import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import COLORS from '../../colors/myColors.tsx';
import surahList from '../../constants/listItems/surahList.ts';

import styles from './style.ts';

export default function renderSurahList() {
  return (
    <FlatList
      data={surahList}
      keyExtractor={(item) => item.surahNo.toString()}
      renderItem={({ item }) => (
        <View style={styles.contanier}>
          <TouchableOpacity style={styles.item}>
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
