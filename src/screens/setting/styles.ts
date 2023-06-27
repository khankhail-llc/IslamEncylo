import { StyleSheet, Dimensions } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const Width = Dimensions.get('window').width;

const styles = (theme: Theme) => StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    alignSelf: 'center',
    backgroundColor: theme.colors.SEARCHBARCONTAINER,
    borderRadius: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    padding: 12,
    paddingHorizontal: 24,
    paddingVertical: 10,
    width: Width - 20,
  },
  headerStyle: {
    alignSelf: 'center',
    backgroundColor: theme.colors.SEARCHBARCONTAINER,
    borderRadius: 12,
    flexDirection: 'row',
    marginTop: 10,
    padding: 8,
    width: Width - 20,
  },
  headerText: {
    color: theme.colors.SEARCHBAR,
    flex: 1,
    fontSize: theme.typography.size.M,
    fontWeight: '600',
    textAlign: 'center',
  },
  textStyle: {
    color: theme.colors.SEARCHBAR,
    fontSize: theme.typography.size.M,
    fontWeight: '600',
  },
});

export default styles;
