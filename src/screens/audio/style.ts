import { Dimensions, StyleSheet, Platform } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const { width } = Dimensions.get('window');

const styles = (theme: Theme) => StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bannerView: {
    alignSelf: 'center',
    height: '85%',
    justifyContent: 'center',
    marginTop: 50,
    marginVertical: 10,
    width: '80%',
  },
  headerStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    padding: 8,
    width: width - 5,
  },
  headerText: {
    color: theme.colors.SEARCHBAR,
    fontFamily: 'Raleway-Regular',
    fontSize: theme.typography.size.L,
    fontWeight: '500',
    marginRight: 18,
  },
  outerContainer: {
    flex: 1,
  },
  player: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
    marginTop: 10,
  },
  sliderStyle: {
    alignSelf: 'center',
    width: Platform.OS === 'ios' ? width - 20 : width,
  },
  sliderView: {
    alignSelf: 'center',
    width: '90%',
  },
  surah: {
    alignItems: 'center',
    color: theme.colors.SEARCHBAR,
    fontFamily: 'Raleway-Regular',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 60,
    textAlign: 'center',
  },
  timerContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 30,
  },

  timerStyle: {
    color: theme.colors.SEARCHBAR,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
