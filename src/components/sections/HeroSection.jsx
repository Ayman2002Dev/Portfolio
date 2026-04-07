import { Box, Button, Container, Typography } from "@mui/material";
export default function HeroSection() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 20, md: 26 },
        pb: { xs: 12, md: 16 },
        px: { xs: 1.5, md: 4 },
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(163, 166, 255, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(193, 128, 255, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(163, 166, 255, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(193, 128, 255, 0.05) 0px, transparent 50%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative grid pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(0deg, #a3a6ff 0, #a3a6ff 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #a3a6ff 0, #a3a6ff 1px, transparent 0, transparent 50%)",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Ambient glow orbs */}
      <Box
        sx={{
          position: "absolute",
          top: 80,
          left: -80,
          width: 384,
          height: 384,
          backgroundColor: "rgba(163,166,255,0.10)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: -80,
          width: 384,
          height: 384,
          backgroundColor: "rgba(193,128,255,0.10)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Status Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            py: 0.5,
            borderRadius: "9999px",
            backgroundColor: "#141f38",
            border: "1px solid rgba(64, 72, 93, 0.15)",
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#c890ff",
              boxShadow: "0 0 8px rgba(200,144,255,0.6)",
            }}
          />
          <Typography
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: "0.625rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#a3aac4",
            }}
          >
            Available for new ventures
          </Typography>
        </Box>

        {/* Hero Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem" },
            fontDisplay: "swap",
            letterSpacing: "-0.025em",
            color: "#dee5ff",
            lineHeight: 1.05,
            maxWidth: "56rem",
            mb: 3,
          }}
        >
          I’am Ayman Osama, Software Engineer,{" "}
          <Box
            component="span"
            sx={{
              backgroundImage: "linear-gradient(135deg, #a3a6ff, #c180ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Frontend Developer
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "#a3aac4",
            maxWidth: "40rem",
            lineHeight: 1.75,
            mb: 6,
          }}
        >
          Building modern web experiences with React & Next.js, backed by solid
          Node.js skills.
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            alignItems: "center",
          }}
        >
          <Button
            component="a"
            href="#work"
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.75,
              borderRadius: "9999px",
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 700,
              fontSize: "1rem",
              backgroundColor: "#a3a6ff",
              color: "#0f00a4",
              "&:hover": {
                boxShadow: "0 0 20px rgba(163,166,255,0.3)",
                backgroundColor: "#9396ff",
              },
              transition: "all 0.4s ease",
            }}
          >
            View Projects
          </Button>
          <Button
            component="a"
            href="#contact"
            variant="outlined"
            size="large"
            sx={{
              px: 5,
              py: 1.75,
              borderRadius: "9999px",
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 700,
              fontSize: "1rem",
              borderColor: "rgba(64,72,93,0.3)",
              color: "#dee5ff",
              "&:hover": {
                backgroundColor: "rgba(31,43,73,0.5)",
                borderColor: "rgba(64,72,93,0.5)",
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
