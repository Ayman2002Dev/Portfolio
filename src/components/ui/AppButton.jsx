import { Button } from "@mui/material";

export default function AppButton({ sx, children, variant = "contained", ...props }) {
  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: "9999px",
        px: 3,
        py: 1.25,
        textTransform: "none",
        fontFamily: '"Manrope", sans-serif',
        fontWeight: 700,
        transition: "all 0.4s ease-in-out",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
