import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/NavBar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const darkTheme = createTheme({
    palette: {
      mode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
       <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar onMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
