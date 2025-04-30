import React from "react";
import { Container } from "@mui/material";
import "./style.scss";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Routes } from "./Routes";

function App() {
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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="appContainer">
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
