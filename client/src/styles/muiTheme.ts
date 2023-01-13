import { createTheme } from '@mui/material';
import typography from './typography';
import Colors from './colors.module.scss';

const theme = createTheme({
  typography,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
