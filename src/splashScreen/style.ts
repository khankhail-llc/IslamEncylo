import { StyleSheet } from 'react-native';

import { Theme } from '../theming/themeProvider.tsx';

const styles = (theme: Theme) => StyleSheet.create({
  containerStyles: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imgStyles: {
    flex: 1,
  },
  textStyles: {
    color: theme.colors.LAUNCHSCREEN,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default styles;
