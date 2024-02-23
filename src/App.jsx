import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import {
  Box,
  Stack,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"Background.default"} color={Text.primary}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
