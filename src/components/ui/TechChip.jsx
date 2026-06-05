import { Box, Typography, useTheme } from '@mui/material';

export default function TechChip({ label }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.5,
        py: 0.5,
        backgroundColor: 'var(--app-chip-bg)',
        borderRadius: '9999px',
        border: '1px solid var(--app-border)',
      }}
    >
      <Box
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: isLight ? '#6063ee' : '#c890ff',
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontFamily: '"Manrope", sans-serif',
          fontSize: '0.625rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--app-text)',
          lineHeight: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
