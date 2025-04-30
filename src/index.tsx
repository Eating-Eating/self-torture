import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { red } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#fce4ec",
      dark: "#c9b2ba",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

const container = document.querySelector("#root");
if (!container) throw new Error("Failed to find the root element");

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
  container
);

// serviceWorkerRegistration.register();
