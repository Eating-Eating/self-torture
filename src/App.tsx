import Container from '@material-ui/core/Container';
import './style.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import {Routes} from './Routes'
function App() {
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
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="appContainer">
      <Routes></Routes>
      </Container>
    </ThemeProvider>
  );
}
export default App