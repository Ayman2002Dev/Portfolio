import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import HeroSection from "../components/sections/HeroSection";

const AboutSection = lazy(() => import("../components/sections/AboutSection"));

function SectionFallback() {
  return (
    <Box
      sx={{
        minHeight: { xs: "28rem", md: "36rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={28} />
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
    </>
  );
}
