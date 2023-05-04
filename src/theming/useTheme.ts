// useTheme.ts
import { useContext } from 'react';

import { ThemeContext, Theme } from './ThemeProvider.tsx';

const useTheme = (): Theme => useContext(ThemeContext) as Theme;

export default useTheme;
