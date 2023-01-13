import { ThemeOptions } from '@mui/material';

const getInPx = (number: number) => `${number}px`;

const typography: ThemeOptions['typography'] = {
  fontFamily: 'Montserrat',
  allVariants: {
    fontStyle: 'normal',
    fontWeight: 400,
    textTransform: 'none',
  },
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  body1: {
    fontSize: getInPx(16),
    lineHeight: getInPx(24),
  },
  caption: {},
  button: {},
  subtitle1: {},
  subtitle2: {},
};

export default typography;
