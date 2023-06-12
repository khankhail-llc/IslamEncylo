import { StyleSheet } from 'react-native';

import COLORS from '../../colors/myColors.ts';

const styles = StyleSheet.create({
  SearchBarStyle: {
    color: COLORS.WHITE,
    fontSize: 15,
    fontWeight: '500',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  surahContainer: {
    flex: 1,
  },
});
export default styles;
