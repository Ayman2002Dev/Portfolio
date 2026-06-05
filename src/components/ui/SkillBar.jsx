import { Box, Typography, useTheme } from '@mui/material';

export default function SkillBar({ name, level, color = '#a3a6ff' }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const resolvedColor = color === '#a3a6ff' && isLight ? '#6063ee' : color;

  return (
    <Box sx={{ space: 1.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: isLight ? '#6063ee' : '#c890ff', flexShrink: 0 }} />
        <Typography sx={{ fontFamily: '"Manrope", sans-serif', fontSize: '0.875rem', fontWeight: 600, color: 'var(--app-text)' }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ height: 4, width: '100%', backgroundColor: 'var(--app-chip-bg)', borderRadius: '9999px', overflow: 'hidden' }}>
        <Box
          sx={{
            height: '100%',
            width: `${level}%`,
            backgroundColor: resolvedColor,
            borderRadius: '9999px',
            transition: 'width 1s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
}
