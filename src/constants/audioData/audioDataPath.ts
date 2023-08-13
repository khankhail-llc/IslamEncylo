/* eslint-disable global-require */
type Ayah = {
  ayahNo: number;
  url: string;
};

type Surah = {
  name: string;
  surahNo: number;
  verses: Ayah[];
};
const audioPath: Surah[] = [
  {
    name: 'Al-Fatiha',
    surahNo: 1,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/001007.mp3'),
      },
    ],
  },
  // {
  //   name: 'Al Baqarah',
  //   surahNo: 2,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002008.mp3'),
  //     },
  //     {
  //       ayahNo: 9,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002009.mp3'),
  //     },
  //     {
  //       ayahNo: 10,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002010.mp3'),
  //     },
  //     {
  //       ayahNo: 11,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002011.mp3'),
  //     },
  //     {
  //       ayahNo: 12,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_02/002012.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Imran',
  //   surahNo: 3,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_03/003000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_03/003001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_03/003002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_03/003003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_03/003004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'An Nisa',
  //   surahNo: 4,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_04/004000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_04/004001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_04/004002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_04/004003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_04/004004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Maidah',
  //   surahNo: 5,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_05/005000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_05/005001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_05/005002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_05/005003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_05/005004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Anam',
  //   surahNo: 6,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_06/006000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_06/006001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_06/006002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_06/006003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_06/006004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Araf',
  //   surahNo: 7,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_07/007000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_07/007001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_07/007002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_07/007003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_07/007004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Anfal',
  //   surahNo: 8,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_08/008000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_08/008001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_08/008002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_08/008003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_08/008004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'At Tawbah',
  //   surahNo: 9,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_09/009000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_09/009001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_09/009002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_09/009003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_09/009004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Yunus',
  //   surahNo: 10,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_10/010000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_10/010001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_10/010002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_10/010003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_10/010004.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Hud',
  //   surahNo: 11,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_11/011008.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Yusuf',
  //   surahNo: 12,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_12/012008.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Ar Rad',
  //   surahNo: 13,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_13/013008.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Ibrahim',
  //   surahNo: 14,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_14/014008.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Hijr',
  //   surahNo: 15,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_15/015008.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Al Hijr',
  //   surahNo: 16,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_16/016008.mp3'),
  //     },
  //   ],
  // },
  // {
  //   name: 'An Nahl',
  //   surahNo: 17,
  //   verses: [
  //     {
  //       ayahNo: 0,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017000.mp3'),
  //     },
  //     {
  //       ayahNo: 1,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017001.mp3'),
  //     },
  //     {
  //       ayahNo: 2,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017002.mp3'),
  //     },
  //     {
  //       ayahNo: 3,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017003.mp3'),
  //     },
  //     {
  //       ayahNo: 4,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017004.mp3'),
  //     },
  //     {
  //       ayahNo: 5,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017005.mp3'),
  //     },
  //     {
  //       ayahNo: 6,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017006.mp3'),
  //     },
  //     {
  //       ayahNo: 7,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017007.mp3'),
  //     },
  //     {
  //       ayahNo: 8,
  //       url: require('../../assets/audioData/a_rehman_sudais/surah_17/017008.mp3'),
  //     },
  //   ],
  // },
];

export default audioPath;
