import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocale } from "../../providers/appState";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align,
  accent,
  component = "h2",
  sx,
}) {
  const { isRtl } = useLocale();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const resolvedAlign = align ?? (isRtl ? "right" : "left");
  const resolvedAccent = accent ?? (isLight ? "#6063ee" : "#a3a6ff");

  return (
    <Box
      sx={{
        mb: { xs: 8, md: 10 },
        textAlign: resolvedAlign,
        ...sx,
      }}
    >
      {eyebrow ? (
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontSize: "0.875rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: resolvedAccent,
            mb: 2,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography
        component={component}
        sx={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: { xs: "2.5rem", sm: "3.25rem", md: "5rem" },
          letterSpacing: "-0.05em",
          color: "var(--app-text)",
          mb: description ? 3 : 0,
          lineHeight: 1,
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "var(--app-text-secondary)",
            maxWidth: resolvedAlign === "center" ? "36rem" : "42rem",
            mx: resolvedAlign === "center" ? "auto" : 0,
            lineHeight: 1.75,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
