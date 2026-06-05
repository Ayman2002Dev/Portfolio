import { Box, useTheme } from "@mui/material";

export default function AppCard({ sx, interactive = true, children, ...props }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <Box
      {...props}
      sx={{
        backgroundColor: isLight ? "var(--app-surface-0)" : "var(--app-surface-2)",
        border: "1px solid var(--app-border)",
        borderRadius: "1.5rem",
        boxShadow: isLight
          ? "0 1px 0 rgba(15, 23, 42, 0.03), 0 18px 36px rgba(15, 23, 42, 0.04)"
          : "none",
        transition: "all 0.4s ease",
        ...(interactive && {
          "&:hover": {
            backgroundColor: "var(--app-surface-hover)",
            border: `1px solid ${isLight ? "rgba(77, 84, 255, 0.22)" : "rgba(163,166,255,0.3)"}`,
            boxShadow: isLight
              ? "0 12px 28px rgba(15, 23, 42, 0.06)"
              : "0 20px 40px rgba(163, 166, 255, 0.08)",
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
