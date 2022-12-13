import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { theme } from "./Theme/Theme";
import { router } from "./routes/routes";
import { Box } from "@mui/system";
function App() {
  return (
   <Box>
     <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
      <CssBaseline />
    </ThemeProvider>
   </Box>
  );
}

export default App;
