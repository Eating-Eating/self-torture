import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fce4ec',
      dark: '#c9b2ba',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  }
});

export default theme;
