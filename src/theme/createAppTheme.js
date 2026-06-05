import { createTheme } from "@mui/material/styles";
import { darkThemeTokens, lightThemeTokens } from "./tokens";

const buildTypography = () => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: "-0.025em" },
  h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: "-0.025em" },
  h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
  h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
  h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
  h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
  subtitle1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
  subtitle2: { fontFamily: '"Manrope", sans-serif', fontWeight: 600 },
  body1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
  body2: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
  caption: { fontFamily: '"Manrope", sans-serif', fontSize: "0.75rem" },
  overline: { fontFamily: '"Manrope", sans-serif', fontWeight: 700, letterSpacing: "0.1em" },
  button: { fontFamily: '"Manrope", sans-serif', fontWeight: 700 },
});

const buildComponents = (mode) => {
  const isDark = mode === "dark";
  const surface = isDark ? darkThemeTokens.background.paper : lightThemeTokens.background.paper;
  const hoverSurface = isDark ? "#192540" : "#f3f6ff";
  const glow = isDark ? "rgba(163, 166, 255, 0.08)" : "rgba(77, 84, 255, 0.08)";
  const buttonHover = isDark ? "rgba(31, 43, 73, 0.5)" : "rgba(77, 84, 255, 0.1)";
  const paperBorder = isDark ? "rgba(64, 72, 93, 0.15)" : "rgba(15, 23, 42, 0.08)";
  const appBarBgRest = isDark ? "rgba(2, 6, 23, 0.6)" : "rgba(255, 255, 255, 0.82)";
  const inputBorder = isDark ? "rgba(64, 72, 93, 0.4)" : "rgba(15, 23, 42, 0.22)";
  const inputBorderHover = isDark ? "rgba(64, 72, 93, 0.6)" : "rgba(15, 23, 42, 0.34)";
  const inputText = isDark ? darkThemeTokens.text.primary : lightThemeTokens.text.primary;
  const inputLabel = isDark ? darkThemeTokens.text.secondary : lightThemeTokens.text.secondary;
  const chipBg = isDark ? "#091328" : "#eef3ff";
  const chipText = isDark ? darkThemeTokens.text.primary : lightThemeTokens.text.primary;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          textTransform: "none",
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 700,
          transition: "all 0.4s ease-in-out",
        },
        textPrimary: {
          color: isDark ? darkThemeTokens.text.primary : lightThemeTokens.text.primary,
          "&:hover": {
            backgroundColor: buttonHover,
          },
        },
        containedPrimary: {
          color: isDark ? darkThemeTokens.primary.contrastText : lightThemeTokens.primary.contrastText,
          "&:hover": {
            backgroundColor: isDark ? darkThemeTokens.primary.light : lightThemeTokens.primary.light,
            boxShadow: `0 0 20px ${glow}`,
          },
        },
        outlinedPrimary: {
          borderColor: isDark ? "rgba(64, 72, 93, 0.3)" : "rgba(16, 24, 40, 0.14)",
          color: isDark ? darkThemeTokens.text.primary : lightThemeTokens.text.primary,
          "&:hover": { backgroundColor: buttonHover, borderColor: buttonHover },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surface,
          backgroundImage: "none",
          borderRadius: "24px",
          border: `1px solid ${paperBorder}`,
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            backgroundColor: hoverSurface,
            border: `1px solid ${isDark ? "rgba(163, 166, 255, 0.3)" : "rgba(77, 84, 255, 0.22)"}`,
            boxShadow: `0 20px 40px ${glow}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: appBarBgRest,
          backgroundImage: "none",
          border: `1px solid ${isDark ? "rgba(64, 72, 93, 0.15)" : "rgba(15, 23, 42, 0.12)"}`,
          backdropFilter: "blur(24px)",
          transition: "background-color 0.35s ease, border-color 0.35s ease",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: isDark ? "#091328" : "#ffffff",
          backgroundImage: "none",
          borderColor: isDark ? "rgba(64, 72, 93, 0.3)" : "rgba(15, 23, 42, 0.12)",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderColor: inputBorder,
          color: inputText,
          "&:hover": {
            backgroundColor: buttonHover,
            borderColor: inputBorderHover,
          },
          "&.Mui-selected": {
            backgroundColor: isDark ? darkThemeTokens.primary.main : lightThemeTokens.primary.main,
            color: isDark ? darkThemeTokens.primary.contrastText : lightThemeTokens.primary.contrastText,
            "&:hover": {
              backgroundColor: isDark ? darkThemeTokens.primary.light : lightThemeTokens.primary.light,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInput-underline:before": { borderBottomColor: inputBorder },
          "& .MuiInput-underline:hover:before": { borderBottomColor: `${inputBorderHover} !important` },
          "& .MuiInput-underline:after": { borderBottomColor: isDark ? darkThemeTokens.primary.main : lightThemeTokens.primary.main },
          "& .MuiInputBase-input": { color: inputText, fontFamily: '"Plus Jakarta Sans", sans-serif' },
          "& .MuiInputLabel-root": { color: inputLabel, fontFamily: '"Plus Jakarta Sans", sans-serif' },
          "& .MuiInputLabel-root.Mui-focused": { color: isDark ? darkThemeTokens.primary.main : lightThemeTokens.primary.main },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: inputText,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Manrope", sans-serif',
          fontSize: '0.625rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          backgroundColor: chipBg,
          color: chipText,
          borderRadius: '9999px',
          border: `1px solid ${isDark ? "rgba(64, 72, 93, 0.15)" : "rgba(15, 23, 42, 0.08)"}`,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: isDark ? darkThemeTokens.background.default : lightThemeTokens.background.default,
          color: isDark ? darkThemeTokens.text.primary : lightThemeTokens.text.primary,
          scrollBehavior: "smooth",
          transition: "background-color 0.35s ease, color 0.35s ease",
          colorScheme: mode,
        },
        "::selection": {
          backgroundColor: isDark ? "rgba(163, 166, 255, 0.3)" : "rgba(77, 84, 255, 0.2)",
        },
        "*, *::before, *::after": {
          transition:
            "background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease, box-shadow 0.35s ease",
        },
      },
    },
  };
};

export function buildAppTheme(mode = "dark", direction = "ltr") {
  const tokens = mode === "dark" ? darkThemeTokens : lightThemeTokens;

  return createTheme({
    direction,
    palette: {
      mode,
      primary: tokens.primary,
      secondary: tokens.secondary,
      background: tokens.background,
      text: tokens.text,
      divider: tokens.divider,
    },
    typography: buildTypography(),
    shape: { borderRadius: 16 },
    components: buildComponents(mode),
  });
}
