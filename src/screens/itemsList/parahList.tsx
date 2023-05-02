import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import COLORS from '../../colors/myColors.tsx';

import styles from './style.tsx';

interface JuzzItem {
  paraNo: number;
  title: string;
  urduTittle: string;
}

const surahList: JuzzItem[] = [
  {
    paraNo: 1,
    title: 'Alif lammeem',
    urduTittle: 'آلم',
  },
  {
    paraNo: 2,
    title: 'Sayaqūlu',
    urduTittle: 'سَيَقُولُ',
  },
  {
    paraNo: 3,
    title: 'Tilka ’r-Rusulu',
    urduTittle: 'تِلْكَ ٱلْرُّسُلُ',
  },
  {
    paraNo: 4,
    title: 'Lan Tana Lu',
    urduTittle: 'لن تنالوا',
  },
  {
    paraNo: 5,
    title: 'Wal Mohsanat',
    urduTittle: 'وَالْمُحْصَنَاتُ',
  },
  {
    paraNo: 6,
    title: 'Yuhibbullah',
    urduTittle: 'اللَّهُ يُحِبُّ لَا',
  },
  {
    paraNo: 7,
    title: 'Wa Iza Samiu',
    urduTittle: 'وَإِذَا سَمِعُوا',
  },
  {
    paraNo: 8,
    title: 'Wa Lau Annana',
    urduTittle: 'وَلَوْ أَنَّنَا',
  },
  {
    paraNo: 9,
    title: 'Qalal Malao',
    urduTittle: 'اقَالَ ٱلْمَلَأُ',
  },
  {
    paraNo: 10,
    title: 'Wa A’lamu',
    urduTittle: 'وَاعْلَمُوا',
  },
  {
    paraNo: 11,
    title: 'Yatazeroon',
    urduTittle: 'يَعْتَذِرُونَ',
  },
  {
    paraNo: 12,
    title: 'Wa Mamin Da’abat',
    urduTittle: 'وَمَا مِنْ دَآبَّةٍ',
  },
  {
    paraNo: 13,
    title: 'Wa Ma Ubiroo',
    urduTittle: 'وَمَا أُبَرِّئُ',
  },
  {
    paraNo: 14,
    title: 'Rubama',
    urduTittle: 'رُبَمَا',
  },
  {
    paraNo: 15,
    title: 'Subhanallahzi',
    urduTittle: 'سُبْحَانَ ٱلَّذِى',
  },
  {
    paraNo: 16,
    title: 'Qal Alam',
    urduTittle: 'قَالَ أَلَمْ',
  },
  {
    paraNo: 17,
    title: 'Aqtarabo',
    urduTittle: 'ٱقْتَرَبَ لِلْنَّاسِ',
  },
  {
    paraNo: 18,
    title: 'Qadd Aflaha',
    urduTittle: 'قَدْ أَفْلَح',
  },
  {
    paraNo: 19,
    title: 'Wa Qalallazina',
    urduTittle: 'وَقَالَ ٱلَّذِينَ',
  },
  {
    paraNo: 20,
    title: 'A’man Khalaq',
    urduTittle: 'أَمَّنْ خَلَقَ',
  },
  {
    paraNo: 21,
    title: 'Otlu ma oohiya',
    urduTittle: 'أُتْلُ مَاأُوْحِیَ',
  },
  {
    paraNo: 22,
    title: 'Wa-man yaqnut',
    urduTittle: 'وَمَنْ يَّقْنُتْ',
  },
  {
    paraNo: 23,
    title: 'Wa-Maliya',
    urduTittle: 'وَمَآ لي',
  },
  {
    paraNo: 24,
    title: 'Faman Azlamo',
    urduTittle: 'فَمَنْ أَظْلَمُ',
  },
  {
    paraNo: 25,
    title: 'Elahe Yuruddo',
    urduTittle: 'إِلَيْهِ يُرَدُّ',
  },
  {
    paraNo: 26,
    title: 'Ha’a Meem',
    urduTittle: 'حم',
  },
  {
    paraNo: 27,
    title: 'Qala Fama Khatbukum',
    urduTittle: 'قَالَ فَمَا خَطْبُكُم',
  },
  {
    paraNo: 28,
    title: 'Qadd Sami Allah',
    urduTittle: 'قَدْ سَمِعَ ٱللهُ',
  },
  {
    paraNo: 29,
    title: 'Tabarakallazi',
    urduTittle: 'تَبَارَكَ ٱلَّذِى',
  },
  {
    paraNo: 30,
    title: 'Amma Yatasa’aloon',
    urduTittle: 'عَمَّ',
  },
];
const renderItem = ({ item }: { item: JuzzItem }): JSX.Element => (
  <View style={styles.contanier}>
    <TouchableOpacity style={styles.item}>
      <View style={styles.playButton}>
        <Text style={styles.playButtonText}>
          <Entypo name="controller-play" size={24} color={COLORS.WHITE} />
        </Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.urduTittle}</Text>
    </TouchableOpacity>
  </View>
);

export default function renderParaList(): JSX.Element {
  return (
    <FlatList
      data={surahList}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      keyExtractor={(item) => item.title.toString()}
    />
  );
}
