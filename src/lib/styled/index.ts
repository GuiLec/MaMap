import * as styledComponents from 'styled-components/native';
import {theme} from '../theme';

const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
  withTheme,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof theme
>;

export {css, styled, ThemeProvider, ThemeContext, withTheme};
