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
    h3: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      "@media (min-width: 1200px)": {
        fontSize: "18px",
        lineHeight: "32px",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      "@media (min-width: 992px)": {
        fontSize: "40px",
        lineHeight: "60px",
      },
    },
    h1: {
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: "42px",
      "@media (min-width: 1200px)": {
        fontSize: "48px",
        lineHeight: "72px",
      },
      "@media (min-width: 1400px)": {
        color: "purple",
        fontSize: "56px",
        lineHeight: "84px",
      },
    },
    h5: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "28px",
      color: textPrimary,
      margin: 0,
      "@media (min-width: 992px)": {
        fontSize: "16px",
      },
      "@media (min-width: 1200px)": {
        fontSize: "18px",
      },
    },
    h6: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
      color: textPrimary,
      margin: 0,
    },
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
          "&.underline-link": {
            textDecoration: "underline",
            color: textPrimary,
            "&:hover": {
              color: textSecondary,
            },
          },
          "&.footer-link": {
            color: textPrimary,
            fontWeight: 500,
            "&:hover": {
              color: textSecondary,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.11)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "8px",
          background: "rgba(255, 255, 255, 0.04)",
          boxShadow: "none",
          padding: "24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            padding: "12px 16px",
            borderRadius: "6px",
            background: backgroundPaper,
            border: "1px solid rgba(255, 255, 255, 0.18)",
            height: "48px",
            fontSize: "16px",
            boxSizing: "border-box",
            lineHeight: "24px",
            cursor: "auto",
            opacity: "1 !important",
            "&.MuiInputBase-adornedEnd": {
              paddingRight: 0,
            },
            "& input": {
              padding: 0,
              outline: "none",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontSize: "16px",
          lineHeight: "24px",
          color: textPrimary,
          fontWeight: 400,
          margin: "0px",
          "@media (min-width: 992px)": {
            fontSizeAdjust: "18px",
            lineHeight: "28px",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          background: "rgba(242, 184, 109, 0.18)",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "6px",
          padding: "8px 16px",
          minHeight: "52px",
          fontSize: "14px",
          lineHeight: "18px",
          color: "white",
          fontWeight: "400",
          "&.MuiAlert-filledWarning": {
            borderColor: "rgb(242, 184, 109)",
          },
          "&.MuiAlert-filledSuccess": {
            borderColor: "#2e7d32",
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          fontSize: "inherit",
          lineHeight: "inherit",
          color: textPrimary,
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
    warning: {
      dark: "rgb(211, 129, 23)",
      main: "rgb(242, 184, 109)",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
})
