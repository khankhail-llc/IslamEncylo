import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../theming/themeProvider';
const windowWidth = Dimensions.get('window').width;

const styles = (theme: Theme) =>
  StyleSheet.create({
    Container: {
      alignSelf: 'center',
      backgroundColor: theme.colors.SEARCHBARCONTAINER,
      borderRadius: 7,
      color: theme.colors.SEARCHBARCONTAINER,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 1,
      paddingVertical: 10,
      width: windowWidth - 5,
    },

    QuranHeadingStyle: {
      color: theme.colors.SEARCHBAR,
      fontSize: 25,
      textAlign: 'center',
      fontWeight: '700',
      left: 35,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    imgStyle: {
      borderRadius: 100,
      height: 40,
      width: 40,
    },
    settingIconStyle: {
      left: 15,
      top: 2,
    },
    btnsTextStyle: {
      color: theme.colors.SEARCHBAR,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '700',
    },
    btnsContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 20,
      //
    },
    btnsView: {
      padding: 50,
      backgroundColor: theme.colors.SEARCHBARCONTAINER,
      borderRadius: 15,
      paddingHorizontal: 20,
      //
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2.46,

      elevation: 3,
    },
  });
export default styles;
