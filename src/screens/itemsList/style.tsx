import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../colors/myColors.tsx';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  contanier: {
    alignSelf: 'center',
    backgroundColor: COLORS.GREY,
    borderRadius: 20,
    flex: 1,
    marginTop: 30,
    width: windowWidth - 20,
  },

  item: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 15,
  },

  playButton: {
    alignItems: 'center',
    backgroundColor: COLORS.YELLOW,
    borderRadius: 16,
    height: 32,
    justifyContent: 'center',
    marginRight: 12,
    width: 32,
  },

  playButtonText: {
    borderRadius: 100,
  },

  title: {
    color: COLORS.WHITE,
    flex: 1,
    fontSize: 18,
    fontWeight: '900',
  },
});

export default styles;
