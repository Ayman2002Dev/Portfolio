import { Box, Typography } from '@mui/material';

export default function SkillBar({ name, level, color = '#a3a6ff' }) {
  return (
    <Box sx={{ space: 1.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#c890ff', flexShrink: 0 }} />
        <Typography sx={{ fontFamily: '"Manrope", sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#dee5ff' }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ height: 4, width: '100%', backgroundColor: '#091328', borderRadius: '9999px', overflow: 'hidden' }}>
        <Box
          sx={{
            height: '100%',
            width: `${level}%`,
            backgroundColor: color,
            borderRadius: '9999px',
            transition: 'width 1s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
}
