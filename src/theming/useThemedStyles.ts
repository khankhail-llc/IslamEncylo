// eslint-disable-next-line import/no-unresolved
import { Theme } from './themeProvider.tsx';
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
  return styles(theme);
};

export default useThemedStyles;
