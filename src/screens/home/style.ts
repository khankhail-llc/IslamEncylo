import { StyleSheet } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const styles = (theme: Theme) => StyleSheet.create({
  SearchBarStyle: {
    color: theme.colors.SEARCHBAR,
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
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  surahContainer: {
    flex: 1,
  },
});
export default styles;
