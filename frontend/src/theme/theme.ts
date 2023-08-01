import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#FFFFFF",
            main: "#FFFFFF",
            200: "#F5F5F5",
            300: "#cccccc",
          },
          primary: {
            main: "#52638A",
            200: "#8090B9",
            300: "#E3F3FE",
          },
          accent: {
            main: "#AAB6D4",
            200: "#4D5A75",
          },
          text: {
            main: "#000000",
            200: "#2C2C2C",
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: "#111A29",
            main: "#111A29",
            200: "#1E293A",
            300: "#364053",
          },
          primary: {
            main: "#4D648D",
            200: "#7C91BD",
            300: "#DFF4FF",
          },
          accent: {
            main: "#A7B6D7",
            200: "#4A5A77",
          },
          text: {
            main: "#ffffff",
            200: "#E0E0E0",
          },
        }),
  },
  // fontSize:{
  //   display:
  // }
});
