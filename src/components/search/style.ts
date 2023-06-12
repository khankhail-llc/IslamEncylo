import { StyleSheet, Dimensions, Platform } from 'react-native';

import COLORS from '../../colors/myColors.ts';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  SearchBarStyle: {
    color: COLORS.WHITE,
    fontSize: 15,
    fontWeight: '500',
  },
  iconContainer: {
    alignSelf: 'center',
    marginRight: 4,
  },
  searchBarContainer: {
    alignSelf: 'center',
    backgroundColor: COLORS.LIGHTGRY,
    borderRadius: 22,
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 6 : 0,
    width: windowWidth - 20,
  },
});
export default styles;
