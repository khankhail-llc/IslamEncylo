import { StyleSheet, Dimensions, Platform } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const windowWidth = Dimensions.get('window').width;

const styles = (theme: Theme) =>
  StyleSheet.create({
    SearchBarStyle: {
      color: theme.colors.SEARCHBAR,
      fontSize: 15,
      fontWeight: '500',
      paddingVertical: 6,
    },
    iconContainer: {
      alignSelf: 'center',
      marginRight: 4,
    },
    searchBarContainer: {
      alignSelf: 'center',
      backgroundColor: theme.colors.SEARCHBARCONTAINER,
      borderRadius: 22,
      flexDirection: 'row',
      marginVertical: 15,
      paddingHorizontal: 10,
      paddingVertical: Platform.OS === 'ios' ? 6 : 0,
      width: windowWidth - 20,
    },
  });
export default styles;
