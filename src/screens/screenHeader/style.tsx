import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../colors/myColors.tsx';

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
    fontSize: 30,
  },
  imgStyle: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
});
export default styles;
