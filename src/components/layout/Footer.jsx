import { Box, Container, Typography } from "@mui/material";
import { SOCIAL_LINKS } from "../../data";
import myLogo from "../../../public/images/mylogo-rbg.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(2, 6, 23, 1)",
        borderTop: "1px solid rgba(64, 72, 93, 0.1)",
        py: { xs: 2, md: 4 },
        px: 4,
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "80rem !important" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Box component="img" src={myLogo} alt="My Logo" width={70} />
              <Typography
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  color: "#e2e8f0",
                  fontSize: "1.125rem",
                  mb: 0.5,
                }}
              >
                Ayman Osama
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "0.875rem",
                letterSpacing: "0.025em",
                color: "#94a3b8",
                opacity: 0.8,
              }}
            >
              &copy; {new Date().getFullYear()} Ayman Osama — Frontend
              Developer. All rights reserved.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 4, md: 5 },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {SOCIAL_LINKS.map(({ label, href }) => (
              <Typography
                key={label}
                component="a"
                href={href}
                target="_blank"
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "0.875rem",
                  letterSpacing: "0.025em",
                  color: "#64748b",
                  textDecoration: "none",
                  opacity: 0.8,
                  transition: "all 0.4s ease",
                  textUnderlineOffset: "8px",
                  "&:hover": {
                    color: "#818cf8",
                    opacity: 1,
                  },
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
