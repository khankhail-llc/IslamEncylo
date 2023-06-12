import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../colors/myColors.ts';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 20,
  },

  QuranHeadingStyle: {
    color: COLORS.WHITE,
    fontSize: 25,
    fontWeight: '700',
  },
  imgStyle: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
});
export default styles;
