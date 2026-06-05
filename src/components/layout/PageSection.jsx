import { Box, Container } from "@mui/material";

const VARIANTS = {
  default: {
    backgroundColor: "var(--app-background)",
    backgroundImage: `radial-gradient(circle at 0% 0%, rgba(163,166,255,0.04) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(193,128,255,0.04) 0%, transparent 50%)`,
  },
  soft: {
    backgroundColor: "var(--app-surface-1)",
    backgroundImage: `radial-gradient(circle at 0% 0%, rgba(163,166,255,0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(193,128,255,0.05) 0%, transparent 50%)`,
  },
  none: {
    backgroundColor: "transparent",
  },
};

export default function PageSection({
  id,
  children,
  variant = "default",
  containerMaxWidth = "xl",
  containerSx,
  sx,
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        px: { xs: 1.5, md: 4 },
        position: "relative",
        overflow: "hidden",
        ...VARIANTS[variant],
        ...sx,
      }}
    >
      <Container
        maxWidth={containerMaxWidth}
        sx={{ maxWidth: "80rem !important", ...containerSx }}
      >
        {children}
      </Container>
    </Box>
  );
}
