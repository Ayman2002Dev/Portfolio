import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import AppButton from "../ui/AppButton";
import { useLocale } from "../../providers/appState";
import { useTranslations } from "../../providers/i18nState";

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroButtonVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const heroRef = useRef(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  });
  const [pointerActive, setPointerActive] = useState(false);
  const { t } = useTranslations();
  const { isRtl } = useLocale();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";
  const accentHover = isLight ? "#4d54ff" : "#9396ff";
  const headingLines = t("hero.lines", []);

  useEffect(() => {
    const node = heroRef.current;

    if (!node) {
      return undefined;
    }

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) {
      node.style.setProperty("--hero-x", "0.5");
      node.style.setProperty("--hero-y", "0.35");
      node.style.setProperty("--hero-dx", "0");
      node.style.setProperty("--hero-dy", "0");
      return undefined;
    }

    const clamp = (value) => Math.min(Math.max(value, 0), 1);
    const update = () => {
      const pointer = pointerRef.current;
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      node.style.setProperty("--hero-x", pointer.x.toFixed(4));
      node.style.setProperty("--hero-y", pointer.y.toFixed(4));
      node.style.setProperty("--hero-dx", ((pointer.x - 0.5) * 2).toFixed(4));
      node.style.setProperty("--hero-dy", ((pointer.y - 0.5) * 2).toFixed(4));

      frameRef.current = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event) => {
      const rect = node.getBoundingClientRect();
      pointerRef.current.targetX = clamp(
        (event.clientX - rect.left) / rect.width,
      );
      pointerRef.current.targetY = clamp(
        (event.clientY - rect.top) / rect.height,
      );
      setPointerActive((current) => (current ? current : true));
    };

    const handlePointerLeave = () => {
      pointerRef.current.targetX = 0.5;
      pointerRef.current.targetY = 0.5;
      setPointerActive((current) => (current ? false : current));
    };

    frameRef.current = window.requestAnimationFrame(update);
    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    node.addEventListener("pointerdown", handlePointerMove);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
      node.removeEventListener("pointerdown", handlePointerMove);
    };
  }, []);

  return (
    <Box
      ref={heroRef}
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 14, md: 18 },
        pb: { xs: 12, md: 16 },
        px: { xs: 1.25, sm: 1.5, md: 4 },
        overflow: "hidden",
        isolation: "isolate",
        backgroundImage: `
          radial-gradient(circle at 0% 0%, ${isLight ? "rgba(77,84,255,0.08)" : "rgba(163,166,255,0.08)"} 0%, transparent 40%),
          radial-gradient(circle at 100% 0%, rgba(193,128,255,0.08) 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, ${isLight ? "rgba(77,84,255,0.08)" : "rgba(163,166,255,0.08)"} 0%, transparent 42%),
          radial-gradient(circle at 0% 100%, rgba(193,128,255,0.08) 0%, transparent 42%)
        `,
        "--hero-x": "0.5",
        "--hero-y": "0.5",
        "--hero-dx": "0",
        "--hero-dy": "0",
      }}
    >
      <Box
        aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.35,
            display: { xs: "none", sm: "block" },
            backgroundImage:
            isLight
              ? "repeating-linear-gradient(0deg, rgba(77,84,255,0.45) 0, rgba(77,84,255,0.45) 1px, transparent 0, transparent 52px), repeating-linear-gradient(90deg, rgba(77,84,255,0.45) 0, rgba(77,84,255,0.45) 1px, transparent 0, transparent 52px)"
              : "repeating-linear-gradient(0deg, rgba(163,166,255,0.55) 0, rgba(163,166,255,0.55) 1px, transparent 0, transparent 52px), repeating-linear-gradient(90deg, rgba(163,166,255,0.55) 0, rgba(163,166,255,0.55) 1px, transparent 0, transparent 52px)",
            backgroundSize: "180px 180px",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 72%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 72%, rgba(0,0,0,0) 100%)",
          transform:
            "translate3d(calc(var(--hero-dx, 0) * -28px), calc(var(--hero-dy, 0) * -28px), 0) scale(1.07)",
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            left: "calc(var(--hero-x) * 100%)",
          top: "calc(var(--hero-y) * 100%)",
          width: "clamp(220px, 34vw, 520px)",
          height: "clamp(220px, 34vw, 520px)",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
            background:
            isLight
              ? "radial-gradient(circle, rgba(77,84,255,0.24) 0%, rgba(193,128,255,0.14) 32%, rgba(245,247,251,0) 70%)"
              : "radial-gradient(circle, rgba(163,166,255,0.28) 0%, rgba(193,128,255,0.16) 32%, rgba(15,25,48,0) 70%)",
          filter: "blur(28px)",
          opacity: pointerActive ? 0.95 : 0.5,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
          zIndex: 0,
          display: { xs: "none", sm: "block" },
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
        <motion.div
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%" }}
        >
          <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: "9999px",
                backgroundColor: "var(--app-surface-3)",
                border: "1px solid var(--app-border)",
                mb: 4,
              }}
            >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: accent,
                boxShadow: `0 0 8px ${isLight ? "rgba(77,84,255,0.45)" : "rgba(200,144,255,0.6)"}`,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: "0.625rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--app-text-secondary)",
              }}
            >
              {t("hero.badge")}
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            component="h1"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "2.55rem", sm: "4.25rem", md: "5.75rem" },
              letterSpacing: "-0.04em",
              color: "var(--app-text)",
              lineHeight: 1.05,
              maxWidth: "56rem",
              mb: 3,
            }}
          >
            {headingLines.map((line, lineIndex) => (
              <Box
                component={motion.span}
                variants={heroItemVariants}
                key={`${line.join("-")}-${lineIndex}`}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0 0.32ch",
                  lineHeight: 1.05,
                }}
              >
                {line.map((word, wordIndex) => (
                  <Box
                    component={motion.span}
                    variants={heroItemVariants}
                    key={`${word}-${wordIndex}`}
                    sx={{ display: "inline-block" }}
                  >
                    {word}
                  </Box>
                ))}
              </Box>
            ))}
            <Box
              component={motion.span}
              variants={heroItemVariants}
              sx={{
                display: "inline-block",
                mt: 0.5,
                backgroundImage: isLight
                  ? "linear-gradient(135deg, #6063ee, #c180ff)"
                  : "linear-gradient(135deg, #a3a6ff, #c180ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("hero.accent")}
            </Box>
          </Typography>
        </motion.div>

        <motion.div variants={heroItemVariants} initial="hidden" animate="visible">
          <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: { xs: "0.98rem", md: "1.125rem" },
                color: "var(--app-text-secondary)",
              maxWidth: "40rem",
              lineHeight: 1.75,
              mb: 6,
            }}
          >
            {t("hero.subtitle")}
          </Typography>
        </motion.div>

        <Box
          component={motion.div}
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            alignItems: "center",
          }}
        >
          <Box component={motion.div} variants={heroButtonVariants}>
            <AppButton
              component="a"
              href="#work"
              size="large"
              sx={{
                px: 5,
                py: 1.75,
                fontSize: "1rem",
                backgroundColor: accent,
                color: "#ffffff",
                "&:hover": {
                  boxShadow: `0 0 20px ${isLight ? "rgba(77,84,255,0.28)" : "rgba(163,166,255,0.3)"}`,
                  backgroundColor: accentHover,
                },
              }}
              >
              {t("hero.ctaProjects")}
              <ArrowRightAltIcon
                sx={{
                  ml: 1,
                  fontSize: "1.2rem",
                  transform: isRtl ? "scaleX(-1)" : "none",
                }}
              />
            </AppButton>
          </Box>
          <Box component={motion.div} variants={heroButtonVariants}>
            <AppButton
              component="a"
              href="#contact"
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 1.75,
                fontSize: "1rem",
                borderColor: "var(--app-border-strong)",
                color: "var(--app-text)",
                "&:hover": {
                  backgroundColor: "var(--app-surface-3)",
                  borderColor: "var(--app-border-strong)",
                },
              }}
            >
              {t("hero.ctaContact")}
            </AppButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
