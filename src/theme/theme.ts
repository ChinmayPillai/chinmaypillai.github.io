import { createTheme, responsiveFontSizes } from "@mui/material";
import { tokens } from "../components/Utilities/colors";

declare module "@mui/material/styles" {
  interface Palette {
    border: { subtle: string; strong: string; accent: string };
    accentMuted: string;
  }
  interface PaletteOptions {
    border?: { subtle: string; strong: string; accent: string };
    accentMuted?: string;
  }
}

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: tokens.accent, contrastText: tokens.bg.base },
    background: { default: tokens.bg.base, paper: tokens.bg.surface },
    text: {
      primary: tokens.text.primary,
      secondary: tokens.text.secondary,
    },
    border: {
      subtle: tokens.border.subtle,
      strong: tokens.border.strong,
      accent: tokens.border.accent,
    },
    accentMuted: tokens.accentMuted,
    divider: tokens.border.subtle,
  },
  shape: { borderRadius: tokens.radius.card },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: 56,
      fontWeight: 600,
      color: tokens.text.heading,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      overflowWrap: "anywhere",
      "@media (max-width:600px)": { fontSize: 44 },
      "@media (max-width:400px)": { fontSize: 34 },
    },
    h2: {
      fontSize: 40,
      fontWeight: 600,
      color: tokens.text.heading,
      lineHeight: 1.15,
      letterSpacing: "-0.015em",
      overflowWrap: "anywhere",
      "@media (max-width:600px)": { fontSize: 32 },
      "@media (max-width:400px)": { fontSize: 26 },
    },
    h3: { fontSize: 28, fontWeight: 600, color: tokens.text.heading, lineHeight: 1.25 },
    h4: { fontSize: 22, fontWeight: 600 },
    h5: { fontSize: 18, fontWeight: 500 },
    h6: { fontSize: 16, fontWeight: 500 },
    body1: { fontSize: 16, lineHeight: 1.65 },
    body2: { fontSize: 14, lineHeight: 1.6 },
    button: { fontSize: 14, fontWeight: 500, textTransform: "none" },
  },
  components: {
    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          backgroundColor: tokens.bg.surface,
          borderColor: tokens.border.subtle,
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableFocusRipple: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          transition: tokens.transition.default,
          "&:hover": {
            backgroundColor: "rgba(45,212,191,0.06)",
            color: tokens.accent,
          },
          "&.Mui-focusVisible": {
            outline: `2px solid ${tokens.accent}`,
            outlineOffset: 2,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: { disableFocusRipple: true },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(45,212,191,0.06)",
            color: tokens.accent,
          },
          "&.Mui-focusVisible": {
            outline: `2px solid ${tokens.accent}`,
            outlineOffset: 2,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        child: {
          backgroundColor: tokens.accent,
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "md" },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: tokens.bg.base },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
