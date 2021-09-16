import Container from '@material-ui/core/Container';
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter basename="/eating-eating">
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="appContainer">
      <Routes></Routes>
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}
export default App