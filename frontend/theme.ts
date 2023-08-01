import { PaletteColorOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  // อย่าลืมใส่ไฟล์นี้ใน tsconfig.json ตรง include
  //  ถ้าอยากรู้ว่ามันมี options อะไรบ้างให้เข้าไปดู createPalette ของ mui

  // PaletteOptions,Palette: background,primary,accent,text
  // แต่ละ PaletteOptions จะมี PaletteColor

  // PaletteOptions มาคู่กับ Palette
  interface Palette {
    accent?: PaletteColor;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }

  // SimplePaletteColorOptions มาคู่กับ PaletteColor
  interface SimplePaletteColorOptions {
    200?: string;
    300?: string;
  }

  interface PaletteColor {
    200?: string;
    300?: string;
  }

  interface TypeText {
    main?: string;
    200?: string;
  }

  interface TypeBackground {
    main?: string;
    200?: string;
    300?: string;
  }
}