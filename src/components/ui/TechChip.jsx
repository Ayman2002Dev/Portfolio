import { Box, Typography } from '@mui/material';

export default function TechChip({ label }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.5,
        py: 0.5,
        backgroundColor: '#091328',
        borderRadius: '9999px',
        border: '1px solid rgba(64, 72, 93, 0.1)',
      }}
    >
      <Box
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: '#c890ff',
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
          color: '#dee5ff',
          lineHeight: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
