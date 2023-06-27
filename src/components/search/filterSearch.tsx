import { SurahItem } from '../../constants/surahList.ts';

const filterSurah = (data: SurahItem[], searchStr = '') => {
  if (searchStr !== '') {
    return data.filter(
      ({ title, arabicTittle }) =>
        title.toLowerCase().includes(searchStr.toLowerCase()) ||
        arabicTittle.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
  return data;
};

export default filterSurah;
