import { StyleSheet, Dimensions } from 'react-native';

import { Theme } from '../../theming/themeProvider.tsx';

const windowWidth = Dimensions.get('window').width;

const styles = (theme: Theme) => StyleSheet.create({
  arabicTitleStyle: {
    textAlign: 'right',
  },
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
    backgroundColor: theme.colors.SEARCHBARCONTAINER,
    borderRadius: 11,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  meaningtitle: {
    color: theme.colors.SEARCHBARCONTAINER,
    flex: 1,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  playButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    marginRight: 13,
    width: 30,
  },
  titleStyle: {
    color: theme.colors.SEARCHBAR,
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

export type Styles = {
  arabicTitleStyle: {
    textAlign: 'right';
  };
  contanier: {
    alignSelf: 'center';
    marginTop: number;
    width: number;
  };
  iconContainer: {
    marginLeft: number;
  };
  itemContainer: {
    alignItems: 'center';
    backgroundColor: string;
    borderRadius: number;
    flexDirection: 'row';
    marginTop: number;
    paddingHorizontal: number;
    paddingVertical: number;
  };
  meaningtitle: {
    color: string;
    flex: number;
    fontSize: number;
    fontStyle: 'normal';
    fontWeight: '500';
  };
  playButton: {
    alignItems: 'center';
    backgroundColor: string;
    borderRadius: number;
    height: number;
    justifyContent: 'center';
    marginRight: number;
    width: number;
  };
  titleStyle: {
    color: string;
    flex: number;
    fontSize: number;
    fontWeight: 'bold';
  };
}
