import { StyleSheet, Dimensions, Platform } from 'react-native';

import COLORS from '../../colors/myColors.ts';

const windowWidth = Dimensions.get('window').width;

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
  iconContainer: {
    alignItems: 'center',
    marginRight: 4,
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
  },

  searchBarContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.LIGHTGRY,
    borderRadius: 22,
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 6 : 0,
    width: windowWidth - 20,
  },
  surahContainer: {
    flex: 1,
  },
});
export default styles;
