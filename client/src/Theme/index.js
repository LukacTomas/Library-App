import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO somehow jsconfig not working?
import { AppplicationBar } from "../Components/ApplicationBar/";

const theme = createTheme({
  palette: {
    mode: Math.random() > 0.5 ? "light" : "dark",
  },
});

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppplicationBar />
      {children}
    </ThemeProvider>
  );
};
