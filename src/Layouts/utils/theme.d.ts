import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: MuiPalette["primary"]
    light: MuiPalette["primary"]
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    tertiary?: MuiPaletteOptions["primary"]
    light?: MuiPaletteOptions["primary"]
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true
    light: true
  }
}
