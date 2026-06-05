import { memo } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { motion } from "framer-motion";
import AppCard from "./AppCard";

const ICON_MAP = {
  verified: VerifiedIcon,
  school: SchoolIcon,
  workspace_premium: WorkspacePremiumIcon,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function CertificateCardBase({ cert }) {
  const IconComponent = ICON_MAP[cert.icon] || VerifiedIcon;
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const badgeBackground = isLight ? "var(--app-surface-0)" : "rgba(9,19,40,0.78)";
  const badgeBorder = isLight ? "1px solid var(--app-border)" : "1px solid rgba(255,255,255,0.12)";
  const badgeShadow = isLight ? "0 12px 30px rgba(15,23,42,0.12)" : "0 10px 30px rgba(15,25,48,0.35)";
  const accent = isLight ? "#6063ee" : "#a3a6ff";

  return (
    <AppCard
      component={motion.article}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, rotate: 0.2 }}
      sx={{
        p: { xs: 3.5, md: 4 },
        height: "100%",
        position: "relative",
        overflow: "hidden",
        "&:hover .certificate-preview": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Box
        className="certificate-preview"
        sx={{
          position: "relative",
          height: 132,
          mb: 3,
          borderRadius: "1.125rem",
          overflow: "hidden",
          border: "1px solid var(--app-border)",
          backgroundImage:
            isLight
              ? "linear-gradient(145deg, rgba(77,84,255,0.18), rgba(193,128,255,0.12)), linear-gradient(0deg, var(--app-surface-1), var(--app-surface-1))"
              : "linear-gradient(145deg, rgba(163,166,255,0.22), rgba(193,128,255,0.14)), linear-gradient(0deg, var(--app-surface-1), var(--app-surface-1))",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              isLight
                ? "repeating-linear-gradient(135deg, rgba(15,23,42,0.05) 0 12px, transparent 12px 24px)"
                : "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 12px, transparent 12px 24px)",
            opacity: isLight ? 0.45 : 0.3,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              isLight
                ? "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55) 0%, transparent 28%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.28) 0%, transparent 32%)"
                : "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18) 0%, transparent 28%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12) 0%, transparent 32%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              backgroundColor: badgeBackground,
              border: badgeBorder,
              boxShadow: badgeShadow,
            }}
          >
            <IconComponent sx={{ color: accent, fontSize: "2rem" }} />
          </Box>
        </Box>
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
            transform: "translateX(-140%)",
            animation: "certificate-shimmer 2.4s linear infinite",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.0625rem",
            color: "var(--app-text)",
            lineHeight: 1.35,
          }}
        >
          {cert.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontSize: "0.75rem",
            color: "var(--app-text-secondary)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {cert.date}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: "0.875rem",
          color: "var(--app-text-secondary)",
        }}
      >
        {cert.issuer}
      </Typography>
    </AppCard>
  );
}

export default memo(CertificateCardBase);
