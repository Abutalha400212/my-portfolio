import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { theme } from "./Theme/Theme";
import { router } from "./routes/routes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
