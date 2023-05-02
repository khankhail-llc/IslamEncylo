import React from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import COLORS from '../../colors/myColors.tsx';

import styles from './style.tsx';

interface JuzzItem {
  title: string;
  urduTittle: string;
}
const surahList: JuzzItem[] = [
  {
    title: 'Al-Fatihah',
    urduTittle: 'الفاتحة',
  },
  {
    title: 'Al-Baqarah',
    urduTittle: 'البقرة',
  },
  {
    title: 'Al-Imran',
    urduTittle: 'آل عمران',
  },
  {
    title: 'An-Nisa',
    urduTittle: 'النساء',
  },
  {
    title: 'Al-Maidah',
    urduTittle: 'المائدة',
  },
  {
    title: 'Al-Anam',
    urduTittle: 'الأنعام',
  },
  {
    title: 'Al-Araf',
    urduTittle: 'الأعراف',
  },
  {
    title: 'Al-Anfal',
    urduTittle: 'الأنفال',
  },
  {
    title: 'At-Tawbah',
    urduTittle: 'التوبة',
  },
  {
    title: 'Yunus',
    urduTittle: 'يونس',
  },
  {
    title: 'Hud',
    urduTittle: 'هود',
  },
  {
    title: 'Yusuf',
    urduTittle: 'يوسف',
  },
  {
    title: 'Ar-Rad',
    urduTittle: 'الرعد',
  },
  {
    title: 'Ibrahim',
    urduTittle: 'إبراهيم',
  },
  {
    title: 'Al-Hijr',
    urduTittle: 'الحجر',
  },
  {
    title: 'An-Nahl',
    urduTittle: 'النحل',
  },
  {
    title: 'Al-Isra',
    urduTittle: 'الإسراء',
  },
  {
    title: 'Al-Kahf',
    urduTittle: 'الكهف',
  },
  {
    title: 'Maryam',
    urduTittle: 'مريم',
  },
  {
    title: 'Taha',
    urduTittle: 'طه',
  },
  {
    title: 'Al-Anbiya',
    urduTittle: 'الأنبياء',
  },
  {
    title: 'Al-Hajj',
    urduTittle: 'الحج',
  },
  {
    title: 'Al-Muminun',
    urduTittle: 'المؤمنون',
  },
  {
    title: 'An-Nur',
    urduTittle: 'النور',
  },
  {
    title: 'Al-Furqan',
    urduTittle: 'الفرقان',
  },
  {
    title: 'Ash-Shuara',
    urduTittle: 'الشعراء',
  },
  {
    title: 'An-Naml',
    urduTittle: 'النمل',
  },
  {
    title: 'Al-Qasas',
    urduTittle: 'القصص',
  },
  {
    title: 'Al-Ankabut',
    urduTittle: 'العنكبوت',
  },
  {
    title: 'Ar-Rum',
    urduTittle: 'الروم',
  },
  {
    title: 'Luqman',
    urduTittle: 'لقمان',
  },
  {
    title: 'As-Sajdah',
    urduTittle: 'السجدة',
  },
  {
    title: 'Al-Ahzab',
    urduTittle: 'الأحزاب',
  },
  {
    title: 'Saba',
    urduTittle: 'سبأ',
  },
  {
    title: 'Fatir',
    urduTittle: 'فاطر',
  },
  {
    title: 'Ya-Sin',
    urduTittle: 'يس',
  },
  {
    title: 'As-Saffat',
    urduTittle: 'الصافات',
  },
  {
    title: 'Sad',
    urduTittle: 'ص',
  },
  {
    title: 'Az-Zumar',
    urduTittle: 'الزمر',
  },
  {
    title: 'Ghafir',
    urduTittle: 'غافر',
  },
  {
    title: 'Fussilat',
    urduTittle: 'فصلت',
  },
  {
    title: 'Ash-Shura',
    urduTittle: 'الشورى',
  },
  {
    title: 'Az-Zukhruf',
    urduTittle: 'الزخرف',
  },
  {
    title: 'Ad-Dukhan',
    urduTittle: 'الدخان',
  },
  {
    title: 'Al-Jathiyah',
    urduTittle: 'الجاثية',
  },
  {
    title: 'Al-Ahqaf',
    urduTittle: 'الأحقاف',
  },
  {
    title: 'Muhammad',
    urduTittle: 'محمد',
  },
  {
    title: 'Al-Fath',
    urduTittle: 'الفتح',
  },
  {
    title: 'Al-Hujurat',
    urduTittle: 'الحجرات',
  },
  {
    title: 'Qaf',
    urduTittle: 'ق',
  },
  {
    title: 'Adh-Dhariyat',
    urduTittle: 'الذاريات',
  },
  {
    title: 'At-Tur',
    urduTittle: 'الطور',
  },
  {
    title: 'An-Najm',
    urduTittle: 'النجم',
  },
  {
    title: 'Al-Qamar',
    urduTittle: 'القمر',
  },
  {
    title: 'Ar-Rahman',
    urduTittle: 'الرحمن',
  },
  {
    title: "Al-Waqi'ah",
    urduTittle: 'الواقعة',
  },
  {
    title: 'Al-Hadid',
    urduTittle: 'الحديد',
  },
  {
    title: 'Al-Mujadilah',
    urduTittle: 'المجادلة',
  },
  {
    title: 'Al-Hashr',
    urduTittle: 'الحشر',
  },
  {
    title: 'Al-Mumtahanah',
    urduTittle: 'الممتحنة',
  },
  {
    title: 'As-Saff',
    urduTittle: 'الصف',
  },
  {
    title: "Al-Jumu'ah",
    urduTittle: 'الجمعة',
  },
  {
    title: 'Al-Munafiqun',
    urduTittle: 'المنافقون',
  },
  {
    title: 'At-Taghabun',
    urduTittle: 'التغابن',
  },
  {
    title: 'At-Talaq',
    urduTittle: 'الطلاق',
  },
  {
    title: 'At-Tahrim',
    urduTittle: 'التحريم',
  },
  {
    title: 'Al-Mulk',
    urduTittle: 'الملك',
  },
  {
    title: 'Al-Qalam',
    urduTittle: 'القلم',
  },
  {
    title: 'Al-Haqqah',
    urduTittle: 'الحاقة',
  },
  {
    title: "Al-Ma'arij",
    urduTittle: 'المعارج',
  },
  {
    title: 'Nuh',
    urduTittle: 'نوح',
  },
  {
    title: 'Al-Jinn',
    urduTittle: 'الجن',
  },
  {
    title: 'Al-Muzzammil',
    urduTittle: 'المزمل',
  },
  {
    title: 'Al-Muddaththir',
    urduTittle: 'المدثر',
  },
  {
    title: 'Al-Qiyamah',
    urduTittle: 'القيامة',
  },
  {
    title: 'Al-Insan',
    urduTittle: 'الإنسان',
  },
  {
    title: 'Al-Mursalat',
    urduTittle: 'المرسلات',
  },
  {
    title: 'An-Naba',
    urduTittle: 'النبأ',
  },
  {
    title: "An-Nazi'at",
    urduTittle: 'النازعات',
  },
  {
    title: 'Abasa',
    urduTittle: 'عبس',
  },
  {
    title: 'At-Takwir',
    urduTittle: 'التكوير',
  },
  {
    title: 'Al-Infitar',
    urduTittle: 'الإنفطار',
  },
  {
    title: 'Al-Mutaffifin',
    urduTittle: 'المطففين',
  },
  {
    title: 'Al-Inshiqaq',
    urduTittle: 'الإنشقاق',
  },
  {
    title: 'Al-Buruj',
    urduTittle: 'البروج',
  },
  {
    title: 'At-Tariq',
    urduTittle: 'الطارق',
  },
  {
    title: 'Al-A`la',
    urduTittle: 'الأعلى',
  },
  {
    title: 'Al-Ghashiyah',
    urduTittle: 'الغاشية',
  },
  {
    title: 'Al-Fajr',
    urduTittle: 'الفجر',
  },
  {
    title: 'Al-Balad',
    urduTittle: 'البلد',
  },
  {
    title: 'Ash-Shams',
    urduTittle: 'الشمس',
  },
  {
    title: 'Al-Lail',
    urduTittle: 'الليل',
  },
  {
    title: 'Ad-Duha',
    urduTittle: 'الضحى',
  },
  {
    title: 'Ash-Sharh',
    urduTittle: 'الشرح',
  },
  {
    title: 'At-Tin',
    urduTittle: 'التين',
  },
  {
    title: 'Al-Alaq',
    urduTittle: 'العلق',
  },
  {
    title: 'Al-Qadr',
    urduTittle: 'القدر',
  },
  {
    title: 'Al-Bayyinah',
    urduTittle: 'البينة',
  },
  {
    title: 'Az-Zalzalah',
    urduTittle: 'الزلزلة',
  },
  {
    title: 'Al-Adiyat',
    urduTittle: 'العاديات',
  },
  {
    title: 'Al-Qariah',
    urduTittle: 'القارعة',
  },
  {
    title: 'At-Takathur',
    urduTittle: 'التكاثر',
  },
  {
    title: 'Al-Asr',
    urduTittle: 'العصر',
  },
  {
    title: 'Al-Humazah',
    urduTittle: 'الهمزة',
  },
  {
    title: 'Al-Fil',
    urduTittle: 'الفيل',
  },
  {
    title: 'Quraish',
    urduTittle: 'قريش',
  },
  {
    title: 'Al-Maun',
    urduTittle: 'الماعون',
  },
  {
    title: 'Al-Kawthar',
    urduTittle: 'الكوثر',
  },
  {
    title: 'Al-Kafirun',
    urduTittle: 'الكافرون',
  },
  {
    title: 'An-Nasr',
    urduTittle: 'النصر',
  },
  {
    title: 'Al-Masadd',
    urduTittle: 'المسد',
  },
  {
    title: 'Al-Ikhlas',
    urduTittle: 'الإخلاص',
  },
  {
    title: 'Al-Falaq',
    urduTittle: 'الفلق',
  },
  {
    title: 'An-Nas',
    urduTittle: 'الناس',
  },
];
export default function renderSurahList(): JSX.Element {
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
