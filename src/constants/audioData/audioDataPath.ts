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
  {
    name: 'An Nisa',
    surahNo: 4,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004129.mp3'),
      },
      {
        ayahNo: 130,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004130.mp3'),
      },
      {
        ayahNo: 131,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004131.mp3'),
      },
      {
        ayahNo: 132,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004132.mp3'),
      },
      {
        ayahNo: 133,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004133.mp3'),
      },
      {
        ayahNo: 134,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004134.mp3'),
      },
      {
        ayahNo: 135,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004135.mp3'),
      },
      {
        ayahNo: 136,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004136.mp3'),
      },
      {
        ayahNo: 137,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004137.mp3'),
      },
      {
        ayahNo: 138,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004138.mp3'),
      },
      {
        ayahNo: 139,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004139.mp3'),
      },
      {
        ayahNo: 140,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004140.mp3'),
      },
      {
        ayahNo: 141,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004141.mp3'),
      },
      {
        ayahNo: 142,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004142.mp3'),
      },
      {
        ayahNo: 143,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004143.mp3'),
      },
      {
        ayahNo: 144,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004144.mp3'),
      },
      {
        ayahNo: 145,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004145.mp3'),
      },
      {
        ayahNo: 146,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004146.mp3'),
      },
      {
        ayahNo: 147,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004147.mp3'),
      },
      {
        ayahNo: 148,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004148.mp3'),
      },
      {
        ayahNo: 149,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004149.mp3'),
      },
      {
        ayahNo: 150,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004150.mp3'),
      },
      {
        ayahNo: 151,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004151.mp3'),
      },
      {
        ayahNo: 152,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004152.mp3'),
      },
      {
        ayahNo: 153,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004153.mp3'),
      },
      {
        ayahNo: 154,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004154.mp3'),
      },
      {
        ayahNo: 155,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004155.mp3'),
      },
      {
        ayahNo: 156,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004156.mp3'),
      },
      {
        ayahNo: 157,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004157.mp3'),
      },
      {
        ayahNo: 158,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004158.mp3'),
      },
      {
        ayahNo: 159,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004159.mp3'),
      },
      {
        ayahNo: 160,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004160.mp3'),
      },
      {
        ayahNo: 161,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004161.mp3'),
      },
      {
        ayahNo: 162,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004162.mp3'),
      },
      {
        ayahNo: 163,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004163.mp3'),
      },
      {
        ayahNo: 164,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004164.mp3'),
      },
      {
        ayahNo: 165,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004165.mp3'),
      },
      {
        ayahNo: 166,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004166.mp3'),
      },
      {
        ayahNo: 167,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004167.mp3'),
      },
      {
        ayahNo: 168,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004168.mp3'),
      },
      {
        ayahNo: 169,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004169.mp3'),
      },
      {
        ayahNo: 170,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004170.mp3'),
      },
      {
        ayahNo: 171,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004171.mp3'),
      },
      {
        ayahNo: 172,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004172.mp3'),
      },
      {
        ayahNo: 173,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004173.mp3'),
      },
      {
        ayahNo: 174,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004174.mp3'),
      },
      {
        ayahNo: 175,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004175.mp3'),
      },
      {
        ayahNo: 176,
        url: require('../../assets/audioData/a_rehman_sudais/surah_04/004176.mp3'),
      },
    ],
  },
  {
    name: 'Al Maidah',
    surahNo: 5,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_05/005120.mp3'),
      },
    ],
  },
  {
    name: 'Al-Anam',
    surahNo: 6,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006129.mp3'),
      },
      {
        ayahNo: 130,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006130.mp3'),
      },
      {
        ayahNo: 131,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006131.mp3'),
      },
      {
        ayahNo: 132,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006132.mp3'),
      },
      {
        ayahNo: 133,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006133.mp3'),
      },
      {
        ayahNo: 134,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006134.mp3'),
      },
      {
        ayahNo: 135,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006135.mp3'),
      },
      {
        ayahNo: 136,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006136.mp3'),
      },
      {
        ayahNo: 137,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006137.mp3'),
      },
      {
        ayahNo: 138,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006138.mp3'),
      },
      {
        ayahNo: 139,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006139.mp3'),
      },
      {
        ayahNo: 140,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006140.mp3'),
      },
      {
        ayahNo: 141,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006141.mp3'),
      },
      {
        ayahNo: 142,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006142.mp3'),
      },
      {
        ayahNo: 143,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006143.mp3'),
      },
      {
        ayahNo: 144,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006144.mp3'),
      },
      {
        ayahNo: 145,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006145.mp3'),
      },
      {
        ayahNo: 146,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006146.mp3'),
      },
      {
        ayahNo: 147,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006147.mp3'),
      },
      {
        ayahNo: 148,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006148.mp3'),
      },
      {
        ayahNo: 149,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006149.mp3'),
      },
      {
        ayahNo: 150,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006150.mp3'),
      },
      {
        ayahNo: 151,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006151.mp3'),
      },
      {
        ayahNo: 152,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006152.mp3'),
      },
      {
        ayahNo: 153,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006153.mp3'),
      },
      {
        ayahNo: 154,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006154.mp3'),
      },
      {
        ayahNo: 155,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006155.mp3'),
      },
      {
        ayahNo: 156,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006156.mp3'),
      },
      {
        ayahNo: 157,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006157.mp3'),
      },
      {
        ayahNo: 158,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006158.mp3'),
      },
      {
        ayahNo: 159,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006159.mp3'),
      },
      {
        ayahNo: 160,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006160.mp3'),
      },
      {
        ayahNo: 161,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006161.mp3'),
      },
      {
        ayahNo: 162,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006162.mp3'),
      },
      {
        ayahNo: 163,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006163.mp3'),
      },
      {
        ayahNo: 164,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006164.mp3'),
      },
      {
        ayahNo: 165,
        url: require('../../assets/audioData/a_rehman_sudais/surah_06/006165.mp3'),
      },
    ],
  },
  {
    name: 'Al Araf',
    surahNo: 7,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007129.mp3'),
      },
      {
        ayahNo: 130,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007130.mp3'),
      },
      {
        ayahNo: 131,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007131.mp3'),
      },
      {
        ayahNo: 132,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007132.mp3'),
      },
      {
        ayahNo: 133,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007133.mp3'),
      },
      {
        ayahNo: 134,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007134.mp3'),
      },
      {
        ayahNo: 135,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007135.mp3'),
      },
      {
        ayahNo: 136,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007136.mp3'),
      },
      {
        ayahNo: 137,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007137.mp3'),
      },
      {
        ayahNo: 138,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007138.mp3'),
      },
      {
        ayahNo: 139,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007139.mp3'),
      },
      {
        ayahNo: 140,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007140.mp3'),
      },
      {
        ayahNo: 141,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007141.mp3'),
      },
      {
        ayahNo: 142,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007142.mp3'),
      },
      {
        ayahNo: 143,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007143.mp3'),
      },
      {
        ayahNo: 144,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007144.mp3'),
      },
      {
        ayahNo: 145,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007145.mp3'),
      },
      {
        ayahNo: 146,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007146.mp3'),
      },
      {
        ayahNo: 147,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007147.mp3'),
      },
      {
        ayahNo: 148,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007148.mp3'),
      },
      {
        ayahNo: 149,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007149.mp3'),
      },
      {
        ayahNo: 150,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007150.mp3'),
      },
      {
        ayahNo: 151,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007151.mp3'),
      },
      {
        ayahNo: 152,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007152.mp3'),
      },
      {
        ayahNo: 153,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007153.mp3'),
      },
      {
        ayahNo: 154,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007154.mp3'),
      },
      {
        ayahNo: 155,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007155.mp3'),
      },
      {
        ayahNo: 156,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007156.mp3'),
      },
      {
        ayahNo: 157,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007157.mp3'),
      },
      {
        ayahNo: 158,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007158.mp3'),
      },
      {
        ayahNo: 159,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007159.mp3'),
      },
      {
        ayahNo: 160,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007160.mp3'),
      },
      {
        ayahNo: 161,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007161.mp3'),
      },
      {
        ayahNo: 162,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007162.mp3'),
      },
      {
        ayahNo: 163,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007163.mp3'),
      },
      {
        ayahNo: 164,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007164.mp3'),
      },
      {
        ayahNo: 165,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007165.mp3'),
      },
      {
        ayahNo: 166,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007166.mp3'),
      },
      {
        ayahNo: 167,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007167.mp3'),
      },
      {
        ayahNo: 168,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007168.mp3'),
      },
      {
        ayahNo: 169,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007169.mp3'),
      },
      {
        ayahNo: 170,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007170.mp3'),
      },
      {
        ayahNo: 171,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007171.mp3'),
      },
      {
        ayahNo: 172,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007172.mp3'),
      },
      {
        ayahNo: 173,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007173.mp3'),
      },
      {
        ayahNo: 174,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007174.mp3'),
      },
      {
        ayahNo: 175,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007175.mp3'),
      },
      {
        ayahNo: 176,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007176.mp3'),
      },
      {
        ayahNo: 177,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007177.mp3'),
      },
      {
        ayahNo: 178,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007178.mp3'),
      },
      {
        ayahNo: 179,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007179.mp3'),
      },
      {
        ayahNo: 180,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007180.mp3'),
      },
      {
        ayahNo: 181,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007181.mp3'),
      },
      {
        ayahNo: 182,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007182.mp3'),
      },
      {
        ayahNo: 183,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007183.mp3'),
      },
      {
        ayahNo: 184,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007184.mp3'),
      },
      {
        ayahNo: 185,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007185.mp3'),
      },
      {
        ayahNo: 186,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007186.mp3'),
      },
      {
        ayahNo: 187,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007187.mp3'),
      },
      {
        ayahNo: 188,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007188.mp3'),
      },
      {
        ayahNo: 189,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007189.mp3'),
      },
      {
        ayahNo: 190,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007190.mp3'),
      },
      {
        ayahNo: 191,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007191.mp3'),
      },
      {
        ayahNo: 192,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007192.mp3'),
      },
      {
        ayahNo: 193,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007193.mp3'),
      },
      {
        ayahNo: 194,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007194.mp3'),
      },
      {
        ayahNo: 195,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007195.mp3'),
      },
      {
        ayahNo: 196,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007196.mp3'),
      },
      {
        ayahNo: 197,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007197.mp3'),
      },
      {
        ayahNo: 198,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007198.mp3'),
      },
      {
        ayahNo: 199,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007199.mp3'),
      },
      {
        ayahNo: 200,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007200.mp3'),
      },
      {
        ayahNo: 201,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007201.mp3'),
      },
      {
        ayahNo: 202,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007202.mp3'),
      },
      {
        ayahNo: 203,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007203.mp3'),
      },
      {
        ayahNo: 204,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007204.mp3'),
      },
      {
        ayahNo: 205,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007205.mp3'),
      },
      {
        ayahNo: 206,
        url: require('../../assets/audioData/a_rehman_sudais/surah_07/007206.mp3'),
      },
    ],
  },
  {
    name: 'Al Anfal',
    surahNo: 8,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_08/008075.mp3'),
      },
    ],
  },
  {
    name: 'At Tawbah',
    surahNo: 9,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_09/009129.mp3'),
      },
    ],
  },
  {
    name: 'Yunus',
    surahNo: 10,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_10/010109.mp3'),
      },
    ],
  },
  {
    name: 'Hud',
    surahNo: 11,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_11/011123.mp3'),
      },
    ],
  },
  {
    name: 'Yusuf',
    surahNo: 12,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_12/012111.mp3'),
      },
    ],
  },
  {
    name: 'Ar Rad',
    surahNo: 13,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_13/013043.mp3'),
      },
    ],
  },
  {
    name: 'Ibrahim',
    surahNo: 14,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_14/014052.mp3'),
      },
    ],
  },
  {
    name: 'Al Hijr',
    surahNo: 15,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_15/015099.mp3'),
      },
    ],
  },
  {
    name: 'An-Nahl',
    surahNo: 16,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_16/016128.mp3'),
      },
    ],
  },
  {
    name: 'Al-Isra',
    surahNo: 17,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_17/017111.mp3'),
      },
    ],
  },
  {
    name: 'Al-Kahf',
    surahNo: 18,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_18/018110.mp3'),
      },
    ],
  },
  {
    name: 'Maryam',
    surahNo: 19,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_19/019098.mp3'),
      },
    ],
  },
  {
    name: 'Ta-Ha',
    surahNo: 20,
    verses: [
      {
        ayahNo: 0,
        url: require('../../assets/audioData/a_rehman_sudais/surah_02/002000.mp3'),
      },
      {
        ayahNo: 1,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020001.mp3'),
      },
      {
        ayahNo: 2,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020002.mp3'),
      },
      {
        ayahNo: 3,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020003.mp3'),
      },
      {
        ayahNo: 4,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020004.mp3'),
      },
      {
        ayahNo: 5,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020005.mp3'),
      },
      {
        ayahNo: 6,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020006.mp3'),
      },
      {
        ayahNo: 7,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020007.mp3'),
      },
      {
        ayahNo: 8,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020008.mp3'),
      },
      {
        ayahNo: 9,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020009.mp3'),
      },
      {
        ayahNo: 10,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020010.mp3'),
      },
      {
        ayahNo: 11,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020011.mp3'),
      },
      {
        ayahNo: 12,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020012.mp3'),
      },
      {
        ayahNo: 13,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020013.mp3'),
      },
      {
        ayahNo: 14,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020014.mp3'),
      },
      {
        ayahNo: 15,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020015.mp3'),
      },
      {
        ayahNo: 16,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020016.mp3'),
      },
      {
        ayahNo: 17,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020017.mp3'),
      },
      {
        ayahNo: 18,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020018.mp3'),
      },
      {
        ayahNo: 19,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020019.mp3'),
      },
      {
        ayahNo: 20,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020020.mp3'),
      },
      {
        ayahNo: 21,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020021.mp3'),
      },
      {
        ayahNo: 22,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020022.mp3'),
      },
      {
        ayahNo: 23,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020023.mp3'),
      },
      {
        ayahNo: 24,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020024.mp3'),
      },
      {
        ayahNo: 25,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020025.mp3'),
      },
      {
        ayahNo: 26,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020026.mp3'),
      },
      {
        ayahNo: 27,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020027.mp3'),
      },
      {
        ayahNo: 28,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020028.mp3'),
      },
      {
        ayahNo: 29,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020029.mp3'),
      },
      {
        ayahNo: 30,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020030.mp3'),
      },
      {
        ayahNo: 31,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020031.mp3'),
      },
      {
        ayahNo: 32,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020032.mp3'),
      },
      {
        ayahNo: 33,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020033.mp3'),
      },
      {
        ayahNo: 34,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020034.mp3'),
      },
      {
        ayahNo: 35,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020035.mp3'),
      },
      {
        ayahNo: 36,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020036.mp3'),
      },
      {
        ayahNo: 37,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020037.mp3'),
      },
      {
        ayahNo: 38,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020038.mp3'),
      },
      {
        ayahNo: 39,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020039.mp3'),
      },
      {
        ayahNo: 40,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020040.mp3'),
      },
      {
        ayahNo: 41,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020041.mp3'),
      },
      {
        ayahNo: 42,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020042.mp3'),
      },
      {
        ayahNo: 43,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020043.mp3'),
      },
      {
        ayahNo: 44,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020044.mp3'),
      },
      {
        ayahNo: 45,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020045.mp3'),
      },
      {
        ayahNo: 46,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020046.mp3'),
      },
      {
        ayahNo: 47,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020047.mp3'),
      },
      {
        ayahNo: 48,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020048.mp3'),
      },
      {
        ayahNo: 49,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020049.mp3'),
      },
      {
        ayahNo: 50,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020050.mp3'),
      },
      {
        ayahNo: 51,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020051.mp3'),
      },
      {
        ayahNo: 52,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020052.mp3'),
      },
      {
        ayahNo: 53,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020053.mp3'),
      },
      {
        ayahNo: 54,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020054.mp3'),
      },
      {
        ayahNo: 55,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020055.mp3'),
      },
      {
        ayahNo: 56,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020056.mp3'),
      },
      {
        ayahNo: 57,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020057.mp3'),
      },
      {
        ayahNo: 58,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020058.mp3'),
      },
      {
        ayahNo: 59,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020059.mp3'),
      },
      {
        ayahNo: 60,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020060.mp3'),
      },
      {
        ayahNo: 61,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020061.mp3'),
      },
      {
        ayahNo: 62,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020062.mp3'),
      },
      {
        ayahNo: 63,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020063.mp3'),
      },
      {
        ayahNo: 64,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020064.mp3'),
      },
      {
        ayahNo: 65,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020065.mp3'),
      },
      {
        ayahNo: 66,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020066.mp3'),
      },
      {
        ayahNo: 67,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020067.mp3'),
      },
      {
        ayahNo: 68,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020068.mp3'),
      },
      {
        ayahNo: 69,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020069.mp3'),
      },
      {
        ayahNo: 70,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020070.mp3'),
      },
      {
        ayahNo: 71,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020071.mp3'),
      },
      {
        ayahNo: 72,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020072.mp3'),
      },
      {
        ayahNo: 73,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020073.mp3'),
      },
      {
        ayahNo: 74,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020074.mp3'),
      },
      {
        ayahNo: 75,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020075.mp3'),
      },
      {
        ayahNo: 76,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020076.mp3'),
      },
      {
        ayahNo: 77,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020077.mp3'),
      },
      {
        ayahNo: 78,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020078.mp3'),
      },
      {
        ayahNo: 79,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020079.mp3'),
      },
      {
        ayahNo: 80,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020080.mp3'),
      },
      {
        ayahNo: 81,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020081.mp3'),
      },
      {
        ayahNo: 82,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020082.mp3'),
      },
      {
        ayahNo: 83,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020083.mp3'),
      },
      {
        ayahNo: 84,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020084.mp3'),
      },
      {
        ayahNo: 85,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020085.mp3'),
      },
      {
        ayahNo: 86,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020086.mp3'),
      },
      {
        ayahNo: 87,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020087.mp3'),
      },
      {
        ayahNo: 88,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020088.mp3'),
      },
      {
        ayahNo: 89,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020089.mp3'),
      },
      {
        ayahNo: 90,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020090.mp3'),
      },
      {
        ayahNo: 91,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020091.mp3'),
      },
      {
        ayahNo: 92,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020092.mp3'),
      },
      {
        ayahNo: 93,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020093.mp3'),
      },
      {
        ayahNo: 94,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020094.mp3'),
      },
      {
        ayahNo: 95,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020095.mp3'),
      },
      {
        ayahNo: 96,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020096.mp3'),
      },
      {
        ayahNo: 97,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020097.mp3'),
      },
      {
        ayahNo: 98,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020098.mp3'),
      },
      {
        ayahNo: 99,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020099.mp3'),
      },
      {
        ayahNo: 100,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020100.mp3'),
      },
      {
        ayahNo: 101,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020101.mp3'),
      },
      {
        ayahNo: 102,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020102.mp3'),
      },
      {
        ayahNo: 103,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020103.mp3'),
      },
      {
        ayahNo: 104,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020104.mp3'),
      },
      {
        ayahNo: 105,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020105.mp3'),
      },
      {
        ayahNo: 106,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020106.mp3'),
      },
      {
        ayahNo: 107,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020107.mp3'),
      },
      {
        ayahNo: 108,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020108.mp3'),
      },
      {
        ayahNo: 109,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020109.mp3'),
      },
      {
        ayahNo: 110,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020110.mp3'),
      },
      {
        ayahNo: 111,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020111.mp3'),
      },
      {
        ayahNo: 112,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020112.mp3'),
      },
      {
        ayahNo: 113,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020113.mp3'),
      },
      {
        ayahNo: 114,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020114.mp3'),
      },
      {
        ayahNo: 115,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020115.mp3'),
      },
      {
        ayahNo: 116,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020116.mp3'),
      },
      {
        ayahNo: 117,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020117.mp3'),
      },
      {
        ayahNo: 118,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020118.mp3'),
      },
      {
        ayahNo: 119,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020119.mp3'),
      },
      {
        ayahNo: 120,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020120.mp3'),
      },
      {
        ayahNo: 121,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020121.mp3'),
      },
      {
        ayahNo: 122,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020122.mp3'),
      },
      {
        ayahNo: 123,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020123.mp3'),
      },
      {
        ayahNo: 124,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020124.mp3'),
      },
      {
        ayahNo: 125,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020125.mp3'),
      },
      {
        ayahNo: 126,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020126.mp3'),
      },
      {
        ayahNo: 127,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020127.mp3'),
      },
      {
        ayahNo: 128,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020128.mp3'),
      },
      {
        ayahNo: 129,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020129.mp3'),
      },
      {
        ayahNo: 130,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020130.mp3'),
      },
      {
        ayahNo: 131,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020131.mp3'),
      },
      {
        ayahNo: 132,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020132.mp3'),
      },
      {
        ayahNo: 133,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020133.mp3'),
      },
      {
        ayahNo: 134,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020134.mp3'),
      },
      {
        ayahNo: 135,
        url: require('../../assets/audioData/a_rehman_sudais/surah_20/020135.mp3'),
      },
    ],
  },
  {
    name: 'Al-Anbiya',
    surahNo: 21,
    verses: [],
  },
  {
    name: 'Al-Hajj',
    surahNo: 22,
    verses: [],
  },
  {
    name: 'Al-Muminun',
    surahNo: 23,
    verses: [],
  },
  {
    name: 'An-Nur',
    surahNo: 24,
    verses: [],
  },
  {
    name: 'Al-Furqan',
    surahNo: 25,
    verses: [],
  },
  {
    name: 'Ash-Shuara',
    surahNo: 26,
    verses: [],
  },
  {
    name: 'An-Naml',
    surahNo: 27,
    verses: [],
  },
  {
    name: 'Al-Ankabut',
    surahNo: 28,
    verses: [],
  },
  {
    name: 'Ar-Rum',
    surahNo: 30,
    verses: [],
  },
  {
    name: 'Luqman',
    surahNo: 31,
    verses: [],
  },
  {
    name: 'As-Sajda',
    surahNo: 32,
    verses: [],
  },
  {
    name: 'Al-Ahzab',
    surahNo: 33,
    verses: [],
  },
  {
    name: 'Saba',
    surahNo: 34,
    verses: [],
  },
  {
    name: 'Fatir',
    surahNo: 35,
    verses: [],
  },
  {
    name: 'Ya-Sin',
    surahNo: 36,
    verses: [],
  },
  {
    name: 'As-Saffat',
    surahNo: 37,
    verses: [],
  },
  {
    name: 'Sad',
    surahNo: 38,
    verses: [],
  },
  {
    name: 'Az-Zumar',
    surahNo: 39,
    verses: [],
  },
  {
    name: 'Ghafir',
    surahNo: 40,
    verses: [],
  },
  {
    name: 'Fussilat',
    surahNo: 41,
    verses: [],
  },
  {
    name: 'Ash-Shura',
    surahNo: 42,
    verses: [],
  },
  {
    name: 'Az-Zukhruf',
    surahNo: 43,
    verses: [],
  },
  {
    name: 'Ad-Dukhan',
    surahNo: 44,
    verses: [],
  },
  {
    name: 'Al-Jathiya',
    surahNo: 45,
    verses: [],
  },
  {
    name: 'Al-Ahqaf',
    surahNo: 46,
    verses: [],
  },
  {
    name: 'Az-Zariyat',
    surahNo: 51,
    verses: [],
  },
  {
    name: 'Al-Mujadila',
    surahNo: 58,
    verses: [],
  },
  {
    name: 'Al-Mulk',
    surahNo: 67,
    verses: [],
  },
  {
    name: 'Al-Muzzammil',
    surahNo: 73,
    verses: [],
  },
  {
    name: 'Al-Insan',
    surahNo: 76,
    verses: [],
  },
  {
    name: 'Al-Alaq',
    surahNo: 96,
    verses: [],
  },
  {
    name: 'Al-Qadr',
    surahNo: 97,
    verses: [],
  },
  {
    name: 'Al-Bayyina',
    surahNo: 98,
    verses: [],
  },
  {
    name: 'Az-Zalzalah',
    surahNo: 99,
    verses: [],
  },
  {
    name: 'Al-Adiyat',
    surahNo: 100,
    verses: [],
  },
  {
    name: 'Al-Qariah',
    surahNo: 101,
    verses: [],
  },
  {
    name: 'At-Takathur',
    surahNo: 102,
    verses: [],
  },
  {
    name: 'Al-Asr',
    surahNo: 103,
    verses: [],
  },
  {
    name: 'Al-Humazah',
    surahNo: 104,
    verses: [],
  },
  {
    name: 'Al-Fil',
    surahNo: 105,
    verses: [],
  },
  {
    name: 'Quraish',
    surahNo: 106,
    verses: [],
  },
  {
    name: 'Al-Maun',
    surahNo: 107,
    verses: [],
  },
  {
    name: 'Al-Kawthar',
    surahNo: 108,
    verses: [],
  },
  {
    name: 'Al-Kafirun',
    surahNo: 109,
    verses: [],
  },
  {
    name: 'An-Nasr',
    surahNo: 110,
    verses: [],
  },
  {
    name: 'Al-Masad',
    surahNo: 111,
    verses: [],
  },
  {
    name: 'Al-Ikhlas',
    surahNo: 112,
    verses: [],
  },
  {
    name: 'Al-Falaq',
    surahNo: 113,
    verses: [],
  },
  {
    name: 'An-Nas',
    surahNo: 114,
    verses: [],
  },
];

export default audioPath;
