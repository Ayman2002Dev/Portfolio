import { createTheme } from '@mui/material/styles';

const palette = {
  primary: { main: '#a3a6ff', dark: '#6063ee', light: '#9396ff', contrastText: '#0f00a4' },
  secondary: { main: '#c180ff', dark: '#9c48ea', light: '#dbb4ff', contrastText: '#33005b' },
  background: { default: '#060e20', paper: '#0f1930' },
  surface: {
    main: '#060e20',
    containerLowest: '#000000',
    containerLow: '#091328',
    container: '#0f1930',
    containerHigh: '#141f38',
    containerHighest: '#192540',
    bright: '#1f2b49',
    variant: '#192540',
  },
  text: {
    primary: '#dee5ff',
    secondary: '#a3aac4',
    disabled: '#6d758c',
  },
  error: { main: '#ff6e84', dark: '#d73357', contrastText: '#490013' },
  tertiary: { main: '#c890ff', dim: '#be83fa', container: '#bc80f8' },
  outline: { main: '#6d758c', variant: '#40485d' },
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: palette.primary,
    secondary: palette.secondary,
    background: palette.background,
    error: palette.error,
    text: palette.text,
    divider: 'rgba(64, 72, 93, 0.2)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.025em' },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.025em' },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    subtitle1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    subtitle2: { fontFamily: '"Manrope", sans-serif', fontWeight: 600 },
    body1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    body2: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    caption: { fontFamily: '"Manrope", sans-serif', fontSize: '0.75rem' },
    overline: { fontFamily: '"Manrope", sans-serif', fontWeight: 700, letterSpacing: '0.1em' },
    button: { fontFamily: '"Manrope", sans-serif', fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 700,
          transition: 'all 0.4s ease-in-out',
        },
        containedPrimary: {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          '&:hover': {
            backgroundColor: palette.primary.light,
            boxShadow: '0 0 20px rgba(163, 166, 255, 0.3)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(64, 72, 93, 0.3)',
          color: '#dee5ff',
          '&:hover': { backgroundColor: 'rgba(31, 43, 73, 0.5)', borderColor: 'rgba(64, 72, 93, 0.5)' },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': { borderBottomColor: 'rgba(64, 72, 93, 0.4)' },
          '& .MuiInput-underline:after': { borderBottomColor: palette.primary.main },
          '& .MuiInputBase-input': { color: '#dee5ff', fontFamily: '"Plus Jakarta Sans", sans-serif' },
          '& .MuiInputLabel-root': { color: '#a3aac4', fontFamily: '"Plus Jakarta Sans", sans-serif' },
          '& .MuiInputLabel-root.Mui-focused': { color: palette.primary.main },
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
          backgroundColor: '#091328',
          color: '#dee5ff',
          borderRadius: '9999px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f1930',
          backgroundImage: 'none',
          borderRadius: '24px',
          border: '1px solid rgba(64, 72, 93, 0.15)',
          transition: 'all 0.4s ease-in-out',
          '&:hover': {
            backgroundColor: '#192540',
            border: '1px solid rgba(163, 166, 255, 0.3)',
            boxShadow: '0 20px 40px rgba(163, 166, 255, 0.08)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#060e20',
          color: '#dee5ff',
          scrollBehavior: 'smooth',
          '&::selection': { backgroundColor: 'rgba(163, 166, 255, 0.3)' },
        },
      },
    },
  },
  custom: palette,
});

export default theme;
