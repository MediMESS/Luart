import { createTheme } from "@mui/material"
import "./theme.d"

const textPrimary = "rgba(255,255,255, 0.88)"
const textSecondary = "rgba(255,255,255, 0.52)"
const primaryMain = "#22EDA6"
const primaryDark = "#4EF1B8"
const primaryContrastText = "rgba(33, 33, 33, 0.72)"
const backgroundPaper = "rgba(255,255,255, 0.04)"
const backgroundDefault = "rgb(29, 35, 67)"

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1200,
      xl: 1400,
    },
  },
  typography: {
    fontFamily: "'Libre Franklin', 'Roboto', serif",
    fontWeightRegular: 600,
    fontWeightMedium: 700,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        // Overriding MuiButton in createTheme instead of theme.scss because it'll always override and more priority of the styling put in the sx prop.
        root: {
          textTransform: "none",
          borderRadius: "6px",
          boxShadow: "none",
          padding: "12px 24px",
          fontSize: "1rem",
          "&:hover, &:focus": {
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: "#2e9370",
          },
          "&.MuiButton-containedTertiary, &.MuiButton-textTertiary, &.MuiButton-outlinedTertiary":
            {
              border: "1px solid rgba(255, 255, 255, 0.18)",
            },
        },
        contained: {
          fontWeight: "600",
        },
        text: {
          fontWeight: "600",
          "&:hover": {
            background: "none",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        // Overriding MuiLink in createTheme instead of theme.scss because it'll always override and more priority of the styling put in the sx prop.
        root: {
          outline: "none",
          fontSize: "14px",
          fontWeight: 600,
          color: textSecondary,
          whiteSpace: "nowrap",
          transition: "color .35s ease",
          fontFamily: "Inter, sans-serif",
          "&:hover, &.active": {
            color: textPrimary,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      dark: primaryDark,
      main: primaryMain,
      contrastText: primaryContrastText,
    },
    tertiary: {
      main: backgroundPaper,
      dark: "rgba(255,255,255, 0.11)",
      contrastText: textPrimary,
    },
    light: {
      main: "rgba(255,255,255)",
      dark: "rgb(226, 226, 227)",
      contrastText: primaryContrastText,
    },
    action: {
      hover: primaryDark,
      active: primaryMain,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    background: {
      paper: backgroundPaper,
      default: backgroundDefault,
    },
  },
})
