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
  typography: {
    fontFamily: "'Libre Franklin', 'Roboto', serif",
    fontWeightRegular: 600,
    fontWeightMedium: 700,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.11)",
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "6px",
          boxShadow: "none",
          padding: "12px 24px",
          fontSize: "1rem",
          "&:hover, &:focus": {
            boxShadow: "none",
          },
          "&.MuiButton-containedTertiary, &.MuiButton-textTertiary, &.MuiButton-outlinedTertiary":
            {
              border: "1px solid rgba(255, 255, 255, 0.18)",
            },
          "&.Mui-disabled": {
            backgroundColor: "#2E9370",
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
        root: {
          textDecorationColor: textSecondary,
          fontSize: "14px",
          fontWeight: 600,
          color: textSecondary,
          whiteSpace: "nowrap",
          "&:hover, &.active": {
            textDecorationColor: textPrimary,
            color: textPrimary,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
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
      contrastText: "rgba(33, 33, 33, 0.72)",
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
