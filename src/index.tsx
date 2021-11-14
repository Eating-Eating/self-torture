import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import {store} from './store'
import App from './App';
import { red } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';

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
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('@/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
  <BrowserRouter basename="/eating-eating">
          <App />
    </BrowserRouter>
        </ThemeProvider>
      </Provider>,
  document.querySelector('#root'),
);
