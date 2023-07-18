/* eslint-disable global-require */
type Ayah = {
  ayahNo: number;
  url: string;
}

type Surah = {
  name: string;
  surahNo: number;
  verses: Ayah[];
}
const surahsData: Surah[] = [
  {
    name: 'Al-Fatiha',
    surahNo: 1,
    verses: [
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/01_01.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/01_02.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/01_03.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/01_04.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/01_05.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_01/01_06.mp3'),
      },
    ],
  },
];

export default surahsData;
