import { Theme } from './ThemeProvider.tsx';
import useTheme from './useTheme.ts';

type ThemedStyles = Record<
  string,
  {
    [key: string]: string | number;
  }
>;

// eslint-disable-next-line no-unused-vars
const useThemedStyles = (styles: (theme: Theme) => ThemedStyles) => {
  const theme = useTheme();
  const themedStyles = styles(theme);

  return themedStyles;
};

export default useThemedStyles;
