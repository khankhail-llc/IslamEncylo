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
  {
    name: 'Al Baqarah',
    surahNo: 2,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002129.mp3'),
      },
      {
        ayahNo: 130,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002130.mp3'),
      },
      {
        ayahNo: 131,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002131.mp3'),
      },
      {
        ayahNo: 132,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002132.mp3'),
      },
      {
        ayahNo: 133,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002133.mp3'),
      },
      {
        ayahNo: 134,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002134.mp3'),
      },
      {
        ayahNo: 135,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002135.mp3'),
      },
      {
        ayahNo: 136,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002136.mp3'),
      },
      {
        ayahNo: 137,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002137.mp3'),
      },
      {
        ayahNo: 138,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002138.mp3'),
      },
      {
        ayahNo: 139,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002139.mp3'),
      },
      {
        ayahNo: 140,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002140.mp3'),
      },
      {
        ayahNo: 141,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002141.mp3'),
      },
      {
        ayahNo: 142,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002142.mp3'),
      },
      {
        ayahNo: 143,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002143.mp3'),
      },
      {
        ayahNo: 144,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002144.mp3'),
      },
      {
        ayahNo: 145,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002145.mp3'),
      },
      {
        ayahNo: 146,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002146.mp3'),
      },
      {
        ayahNo: 147,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002147.mp3'),
      },
      {
        ayahNo: 148,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002148.mp3'),
      },
      {
        ayahNo: 149,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002149.mp3'),
      },
      {
        ayahNo: 150,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002150.mp3'),
      },
      {
        ayahNo: 151,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002151.mp3'),
      },
      {
        ayahNo: 152,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002152.mp3'),
      },
      {
        ayahNo: 153,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002153.mp3'),
      },
      {
        ayahNo: 154,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002154.mp3'),
      },
      {
        ayahNo: 155,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002155.mp3'),
      },
      {
        ayahNo: 156,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002156.mp3'),
      },
      {
        ayahNo: 157,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002157.mp3'),
      },
      {
        ayahNo: 158,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002158.mp3'),
      },
      {
        ayahNo: 159,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002159.mp3'),
      },
      {
        ayahNo: 160,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002160.mp3'),
      },
      {
        ayahNo: 161,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002161.mp3'),
      },
      {
        ayahNo: 162,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002162.mp3'),
      },
      {
        ayahNo: 163,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002163.mp3'),
      },
      {
        ayahNo: 164,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002164.mp3'),
      },
      {
        ayahNo: 165,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002165.mp3'),
      },
      {
        ayahNo: 166,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002166.mp3'),
      },
      {
        ayahNo: 167,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002167.mp3'),
      },
      {
        ayahNo: 168,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002168.mp3'),
      },
      {
        ayahNo: 169,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002169.mp3'),
      },
      {
        ayahNo: 170,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002170.mp3'),
      },
      {
        ayahNo: 171,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002171.mp3'),
      },
      {
        ayahNo: 172,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002172.mp3'),
      },
      {
        ayahNo: 173,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002173.mp3'),
      },
      {
        ayahNo: 174,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002174.mp3'),
      },
      {
        ayahNo: 175,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002175.mp3'),
      },
      {
        ayahNo: 176,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002176.mp3'),
      },
      {
        ayahNo: 177,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002177.mp3'),
      },
      {
        ayahNo: 178,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002178.mp3'),
      },
      {
        ayahNo: 179,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002179.mp3'),
      },
      {
        ayahNo: 180,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002180.mp3'),
      },
      {
        ayahNo: 181,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002181.mp3'),
      },
      {
        ayahNo: 182,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002182.mp3'),
      },
      {
        ayahNo: 183,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002183.mp3'),
      },
      {
        ayahNo: 184,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002184.mp3'),
      },
      {
        ayahNo: 185,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002185.mp3'),
      },
      {
        ayahNo: 186,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002186.mp3'),
      },
      {
        ayahNo: 187,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002187.mp3'),
      },
      {
        ayahNo: 188,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002188.mp3'),
      },
      {
        ayahNo: 189,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002189.mp3'),
      },
      {
        ayahNo: 190,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002190.mp3'),
      },
      {
        ayahNo: 191,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002191.mp3'),
      },
      {
        ayahNo: 192,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002192.mp3'),
      },
      {
        ayahNo: 193,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002193.mp3'),
      },
      {
        ayahNo: 194,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002194.mp3'),
      },
      {
        ayahNo: 195,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002195.mp3'),
      },
      {
        ayahNo: 196,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002196.mp3'),
      },
      {
        ayahNo: 197,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002197.mp3'),
      },
      {
        ayahNo: 198,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002198.mp3'),
      },
      {
        ayahNo: 199,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002199.mp3'),
      },
      {
        ayahNo: 200,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002200.mp3'),
      },
      {
        ayahNo: 201,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002201.mp3'),
      },
      {
        ayahNo: 202,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002202.mp3'),
      },
      {
        ayahNo: 203,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002203.mp3'),
      },
      {
        ayahNo: 204,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002204.mp3'),
      },
      {
        ayahNo: 205,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002205.mp3'),
      },
      {
        ayahNo: 206,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002206.mp3'),
      },
      {
        ayahNo: 207,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002207.mp3'),
      },
      {
        ayahNo: 208,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002208.mp3'),
      },
      {
        ayahNo: 209,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002209.mp3'),
      },
      {
        ayahNo: 210,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002210.mp3'),
      },
      {
        ayahNo: 211,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002211.mp3'),
      },
      {
        ayahNo: 212,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002212.mp3'),
      },
      {
        ayahNo: 213,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002213.mp3'),
      },
      {
        ayahNo: 214,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002214.mp3'),
      },
      {
        ayahNo: 215,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002215.mp3'),
      },
      {
        ayahNo: 216,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002216.mp3'),
      },
      {
        ayahNo: 217,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002217.mp3'),
      },
      {
        ayahNo: 218,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002218.mp3'),
      },
      {
        ayahNo: 219,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002219.mp3'),
      },
      {
        ayahNo: 220,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002220.mp3'),
      },
      {
        ayahNo: 221,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002221.mp3'),
      },
      {
        ayahNo: 222,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002222.mp3'),
      },
      {
        ayahNo: 223,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002223.mp3'),
      },
      {
        ayahNo: 224,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002224.mp3'),
      },
      {
        ayahNo: 225,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002225.mp3'),
      },
      {
        ayahNo: 226,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002226.mp3'),
      },
      {
        ayahNo: 227,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002227.mp3'),
      },
      {
        ayahNo: 228,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002228.mp3'),
      },
      {
        ayahNo: 229,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002229.mp3'),
      },
      {
        ayahNo: 230,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002230.mp3'),
      },
      {
        ayahNo: 231,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002231.mp3'),
      },
      {
        ayahNo: 232,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002232.mp3'),
      },
      {
        ayahNo: 233,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002233.mp3'),
      },
      {
        ayahNo: 234,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002234.mp3'),
      },
      {
        ayahNo: 235,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002235.mp3'),
      },
      {
        ayahNo: 236,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002236.mp3'),
      },
      {
        ayahNo: 237,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002237.mp3'),
      },
      {
        ayahNo: 238,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002238.mp3'),
      },
      {
        ayahNo: 239,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002239.mp3'),
      },
      {
        ayahNo: 240,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002240.mp3'),
      },
      {
        ayahNo: 241,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002241.mp3'),
      },
      {
        ayahNo: 242,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002242.mp3'),
      },
      {
        ayahNo: 243,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002243.mp3'),
      },
      {
        ayahNo: 244,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002244.mp3'),
      },
      {
        ayahNo: 245,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002245.mp3'),
      },
      {
        ayahNo: 246,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002246.mp3'),
      },
      {
        ayahNo: 247,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002247.mp3'),
      },
      {
        ayahNo: 248,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002248.mp3'),
      },
      {
        ayahNo: 249,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002249.mp3'),
      },
      {
        ayahNo: 250,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002250.mp3'),
      },
      {
        ayahNo: 251,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002251.mp3'),
      },
      {
        ayahNo: 252,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002252.mp3'),
      },
      {
        ayahNo: 253,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002253.mp3'),
      },
      {
        ayahNo: 254,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002254.mp3'),
      },
      {
        ayahNo: 255,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002255.mp3'),
      },
      {
        ayahNo: 256,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002256.mp3'),
      },
      {
        ayahNo: 257,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002257.mp3'),
      },
      {
        ayahNo: 258,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002258.mp3'),
      },
      {
        ayahNo: 259,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002259.mp3'),
      },
      {
        ayahNo: 260,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002260.mp3'),
      },
      {
        ayahNo: 261,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002261.mp3'),
      },
      {
        ayahNo: 262,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002262.mp3'),
      },
      {
        ayahNo: 263,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002263.mp3'),
      },
      {
        ayahNo: 264,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002264.mp3'),
      },
      {
        ayahNo: 265,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002265.mp3'),
      },
      {
        ayahNo: 266,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002266.mp3'),
      },
      {
        ayahNo: 267,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002267.mp3'),
      },
      {
        ayahNo: 268,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002268.mp3'),
      },
      {
        ayahNo: 269,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002269.mp3'),
      },
      {
        ayahNo: 270,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002270.mp3'),
      },
      {
        ayahNo: 271,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002271.mp3'),
      },
      {
        ayahNo: 272,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002272.mp3'),
      },
      {
        ayahNo: 273,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002273.mp3'),
      },
      {
        ayahNo: 274,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002274.mp3'),
      },
      {
        ayahNo: 275,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002275.mp3'),
      },
      {
        ayahNo: 276,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002276.mp3'),
      },
      {
        ayahNo: 277,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002277.mp3'),
      },
      {
        ayahNo: 278,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002278.mp3'),
      },
      {
        ayahNo: 279,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002279.mp3'),
      },
      {
        ayahNo: 280,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002280.mp3'),
      },
      {
        ayahNo: 281,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002281.mp3'),
      },
      {
        ayahNo: 282,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002282.mp3'),
      },
      {
        ayahNo: 283,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002283.mp3'),
      },
      {
        ayahNo: 284,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002284.mp3'),
      },
      {
        ayahNo: 285,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002285.mp3'),
      },
      {
        ayahNo: 286,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002286.mp3'),
      },
    ],
  },
  {
    name: 'Al Imran',
    surahNo: 3,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003129.mp3'),
      },
      {
        ayahNo: 130,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003130.mp3'),
      },
      {
        ayahNo: 131,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003131.mp3'),
      },
      {
        ayahNo: 132,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003132.mp3'),
      },
      {
        ayahNo: 133,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003133.mp3'),
      },
      {
        ayahNo: 134,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003134.mp3'),
      },
      {
        ayahNo: 135,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003135.mp3'),
      },
      {
        ayahNo: 136,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003136.mp3'),
      },
      {
        ayahNo: 137,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003137.mp3'),
      },
      {
        ayahNo: 138,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003138.mp3'),
      },
      {
        ayahNo: 139,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003139.mp3'),
      },
      {
        ayahNo: 140,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003140.mp3'),
      },
      {
        ayahNo: 141,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003141.mp3'),
      },
      {
        ayahNo: 142,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003142.mp3'),
      },
      {
        ayahNo: 143,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003143.mp3'),
      },
      {
        ayahNo: 144,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003144.mp3'),
      },
      {
        ayahNo: 145,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003145.mp3'),
      },
      {
        ayahNo: 146,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003146.mp3'),
      },
      {
        ayahNo: 147,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003147.mp3'),
      },
      {
        ayahNo: 148,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003148.mp3'),
      },
      {
        ayahNo: 149,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003149.mp3'),
      },
      {
        ayahNo: 150,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003150.mp3'),
      },
      {
        ayahNo: 151,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003151.mp3'),
      },
      {
        ayahNo: 152,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003152.mp3'),
      },
      {
        ayahNo: 153,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003153.mp3'),
      },
      {
        ayahNo: 154,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003154.mp3'),
      },
      {
        ayahNo: 155,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003155.mp3'),
      },
      {
        ayahNo: 156,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003156.mp3'),
      },
      {
        ayahNo: 157,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003157.mp3'),
      },
      {
        ayahNo: 158,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003158.mp3'),
      },
      {
        ayahNo: 159,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003159.mp3'),
      },
      {
        ayahNo: 160,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003160.mp3'),
      },
      {
        ayahNo: 161,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003161.mp3'),
      },
      {
        ayahNo: 162,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003162.mp3'),
      },
      {
        ayahNo: 163,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003163.mp3'),
      },
      {
        ayahNo: 164,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003164.mp3'),
      },
      {
        ayahNo: 165,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003165.mp3'),
      },
      {
        ayahNo: 166,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003166.mp3'),
      },
      {
        ayahNo: 167,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003167.mp3'),
      },
      {
        ayahNo: 168,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003168.mp3'),
      },
      {
        ayahNo: 169,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003169.mp3'),
      },
      {
        ayahNo: 170,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003170.mp3'),
      },
      {
        ayahNo: 171,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003171.mp3'),
      },
      {
        ayahNo: 172,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003172.mp3'),
      },
      {
        ayahNo: 173,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003173.mp3'),
      },
      {
        ayahNo: 174,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003174.mp3'),
      },
      {
        ayahNo: 175,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003175.mp3'),
      },
      {
        ayahNo: 176,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003176.mp3'),
      },
      {
        ayahNo: 177,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003177.mp3'),
      },
      {
        ayahNo: 178,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003178.mp3'),
      },
      {
        ayahNo: 179,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003179.mp3'),
      },
      {
        ayahNo: 180,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003180.mp3'),
      },
      {
        ayahNo: 181,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003181.mp3'),
      },
      {
        ayahNo: 182,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003182.mp3'),
      },
      {
        ayahNo: 183,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003183.mp3'),
      },
      {
        ayahNo: 184,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003184.mp3'),
      },
      {
        ayahNo: 185,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003185.mp3'),
      },
      {
        ayahNo: 186,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003186.mp3'),
      },
      {
        ayahNo: 187,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003187.mp3'),
      },
      {
        ayahNo: 188,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003188.mp3'),
      },
      {
        ayahNo: 189,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003189.mp3'),
      },
      {
        ayahNo: 190,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003190.mp3'),
      },
      {
        ayahNo: 191,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003191.mp3'),
      },
      {
        ayahNo: 192,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003192.mp3'),
      },
      {
        ayahNo: 193,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003193.mp3'),
      },
      {
        ayahNo: 194,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003194.mp3'),
      },
      {
        ayahNo: 195,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003195.mp3'),
      },
      {
        ayahNo: 196,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003196.mp3'),
      },
      {
        ayahNo: 197,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003197.mp3'),
      },
      {
        ayahNo: 198,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003198.mp3'),
      },
      {
        ayahNo: 199,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003199.mp3'),
      },
      {
        ayahNo: 200,
        url: require('../../assets/audioData/a_rehman_sudais/surah_03/003200.mp3'),
      },
    ],
  },
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
