import "./style/app.css";
import MainPage from "./components/MainPage";
import {
  useMediaQuery,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { useMemo, useEffect } from "react";
import { getDesignTokens } from "./theme/theme";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDarkMode ? "dark" : "light";
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
