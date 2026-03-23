export const globalStyles = {
  '*': { boxSizing: 'border-box', margin: 0, padding: 0 },
  html: { scrollBehavior: 'smooth' },
  body: {
    backgroundColor: '#060e20',
    color: '#dee5ff',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '::-webkit-scrollbar': { width: '6px' },
  '::-webkit-scrollbar-track': { background: '#060e20' },
  '::-webkit-scrollbar-thumb': { background: '#40485d', borderRadius: '3px' },
  '::-webkit-scrollbar-thumb:hover': { background: '#6d758c' },
};

export const colors = {
  surface: '#060e20',
  surfaceContainerLowest: '#000000',
  surfaceContainerLow: '#091328',
  surfaceContainer: '#0f1930',
  surfaceContainerHigh: '#141f38',
  surfaceContainerHighest: '#192540',
  surfaceBright: '#1f2b49',
  surfaceVariant: '#192540',
  primary: '#a3a6ff',
  primaryDim: '#6063ee',
  primaryContainer: '#9396ff',
  secondary: '#c180ff',
  secondaryDim: '#9c48ea',
  tertiary: '#c890ff',
  onSurface: '#dee5ff',
  onSurfaceVariant: '#a3aac4',
  onPrimary: '#0f00a4',
  outline: '#6d758c',
  outlineVariant: '#40485d',
};

export const meshGradient = {
  backgroundImage: `
    radial-gradient(at 0% 0%, rgba(163, 166, 255, 0.05) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(193, 128, 255, 0.05) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(163, 166, 255, 0.05) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(193, 128, 255, 0.05) 0px, transparent 50%)
  `,
};

export const ghostBorder = {
  border: '1px solid rgba(64, 72, 93, 0.15)',
  transition: 'border 0.4s ease-in-out, background-color 0.4s ease-in-out',
  '&:hover': { border: '1px solid rgba(163, 166, 255, 0.3)' },
};

export const ambientGlow = {
  boxShadow: '0 20px 40px rgba(163, 166, 255, 0.08)',
};
