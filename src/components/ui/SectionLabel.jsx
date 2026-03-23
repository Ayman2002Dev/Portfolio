import { Typography } from '@mui/material';

export default function SectionLabel({ children, color = 'secondary' }) {
  const colorMap = { primary: '#a3a6ff', secondary: '#c180ff', tertiary: '#c890ff' };
  return (
    <Typography
      sx={{
        fontFamily: '"Manrope", sans-serif',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: colorMap[color] || colorMap.secondary,
        mb: 2,
        display: 'block',
      }}
    >
      {children}
    </Typography>
  );
}
