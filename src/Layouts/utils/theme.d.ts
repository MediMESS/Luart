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

/**
 * Adding new variant (body3, body4) to Typography.
 */
declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties
    body4: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties
    body4?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true
    body4: true
  }
}
