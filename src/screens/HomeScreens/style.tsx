import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../colors/myColors.tsx';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  SearchBarStyle: {
    color: COLORS.WHITE,
    flex: 1,
    fontSize: 18,
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
    marginRight: 4,
  },
  indicatorStyle: {
    height: 0,
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  searchBarContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.GREY,
    borderRadius: 80,
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    width: windowWidth - 20,

  },
  tabViewStyle: {
    backgroundColor: COLORS.TRANSPARENT,
  },
  tabsConatiner: {
    flex: 1,
  },
  voiceIconStyle: { marginLeft: 'auto' },
});
export default styles;
