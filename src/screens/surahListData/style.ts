import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../colors/myColors.ts';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  contanier: {
    alignSelf: 'center',
    marginTop: 15,
    width: windowWidth - 20,
  },

  iconContainer: {
    marginLeft: 2,
  },

  itemContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.LIGHTGRY,
    borderRadius: 11,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  meaningtitle: {
    color: COLORS.LIGHTGRY,
    flex: 1,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  playButton: {
    alignItems: 'center',
    backgroundColor: COLORS.YELLOW,
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    marginRight: 13,
    width: 30,
  },
  title: {
    color: COLORS.WHITE,
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
