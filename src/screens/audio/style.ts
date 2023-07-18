import { Dimensions, StyleSheet, Platform } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const { width } = Dimensions.get('window');

const styles = (theme: Theme) => StyleSheet.create({
  activityIndicator: {
    backgroundColor: theme.colors.SEARCHBAR,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bannerView: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 70,
    width: '84%',
  },
  headerStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.SEARCHBARCONTAINER,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    padding: 8,
    width: width - 10,
  },
  headerText: {
    color: theme.colors.SEARCHBAR,
    fontSize: theme.typography.size.M,
    fontWeight: '600',
    marginRight: 15,
  },
  highlightedVerse: {
    color: theme.colors.ERROR,
  },
  highlightedWord: {
    color: theme.colors.PRIMARY,
  },
  outerContainer: {
    backgroundColor: theme.colors.THEME,
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
    fontFamily: 'normal',
    fontSize: 29,
    fontWeight: '500',
    justifyContent: 'center',
    lineHeight: 50,
    textAlign: 'center',
  },
  textContainer: {
    borderBottomWidth: 1,
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
