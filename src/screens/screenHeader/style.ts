import { StyleSheet, Dimensions } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const windowWidth = Dimensions.get('window').width;

const styles = (theme: Theme) =>
  StyleSheet.create({
    Container: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: windowWidth - 20,
    },

    QuranHeadingStyle: {
      color: theme.colors.SEARCHBAR,
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
