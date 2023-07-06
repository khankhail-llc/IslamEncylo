import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const { width, height } = Dimensions.get('window');

const styles = (theme: Theme) => StyleSheet.create({
  activityIndicator: {
    backgroundColor: '#112',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  bannerView: {
    alignItems: 'center',
    borderRadius: 10,
    height: height / 2 - 10,
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 140,
    width,
  },
  headerStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.SEARCHBARCONTAINER,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    width: width - 20,
  },
  headerText: {
    color: theme.colors.SEARCHBAR,
    flex: 1,
    fontSize: theme.typography.size.M,
    fontWeight: '600',
    marginRight: 15,
    textAlign: 'center',
  },
  outerContainer: {
    flex: 1,
  },
  player: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  sliderStyle: {
    flex: 1,
    justifyContent: 'center',
    width: width - 30,
  },
  sliderView: {
    alignSelf: 'center',
    marginTop: 50,
    width: '90%',
  },
  surah: {
    color: theme.colors.SEARCHBAR,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 50,
  },
});

export default styles;
