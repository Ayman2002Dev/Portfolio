import { memo } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { motion } from "framer-motion";
import TechChip from "../ui/TechChip";
import AppCard from "./AppCard";
import { useLocale } from "../../providers/appState";
import { useTranslations } from "../../providers/i18nState";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function FeaturedProjectCardBase({ project }) {
  const { t } = useTranslations();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";
  return (
    <AppCard
      component={motion.article}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        height: "100%",
        minHeight: "323px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 4,
        "&:hover .project-img": { transform: "scale(1.05)", opacity: 0.78 },
      }}
    >
      <Box
        component="img"
        className="project-img"
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        width={project.imageWidth}
        height={project.imageHeight}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        sx={{
          height: { xs: "280px", md: "250px" },
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease, opacity 0.5s ease",
        }}
      />
      <Box
        sx={{
          px: { xs: 4, md: 5 },
          pb: { xs: 4, md: 5 },
          pt: 0,
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "1.875rem" },
              mb: 2,
              color: "var(--app-text)",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              color: "var(--app-text-secondary)",
              maxWidth: "28rem",
              lineHeight: 1.75,
            }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
            {project.tags.map((tag) => (
              <TechChip key={tag} label={tag} />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 3,
            flexWrap: "wrap",
            rowGap: 1.5,
          }}
        >
          <Box
            component="a"
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              color: accent,
              textDecoration: "none",
              "&:hover .link-icon": {
                transform: "translate(2px,-2px)",
              },
            }}
          >
            {t("project.liveDemo")}
            <OpenInNewIcon
              className="link-icon"
              sx={{ fontSize: "1rem", transition: "transform 0.2s ease" }}
            />
          </Box>
          <Box
            component="a"
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              color: isLight ? "#4b5563" : "var(--app-text-secondary)",
              textDecoration: "none",
              "&:hover": { color: accent },
              transition: "color 0.2s ease",
            }}
          >
            <CodeIcon sx={{ fontSize: "1rem" }} />
            {t("project.github")}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
}

function SmallProjectCardBase({ project }) {
  const { t } = useTranslations();
  const { isRtl } = useLocale();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";
  return (
    <AppCard
      sx={{
        p: { xs: 4, md: 5 },
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ mb: "auto" }}>
        <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <TechChip key={tag} label={tag} />
          ))}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.25rem",
            mb: 2,
            color: "var(--app-text)",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "0.875rem",
            color: "var(--app-text-secondary)",
            lineHeight: 1.75,
          }}
        >
          {project.description}
        </Typography>
      </Box>

      <Box sx={{ pt: 4, mt: 4, borderTop: "1px solid var(--app-border)" }}>
        <Box
          component="a"
          href={project.link}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            color: "var(--app-text)",
            textDecoration: "none",
            "&:hover": { color: accent },
            transition: "color 0.2s ease",
          }}
        >
          {project.linkLabel || t("project.explore")}
          {isRtl ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Box>
      </Box>
    </AppCard>
  );
}

export const FeaturedProjectCard = memo(FeaturedProjectCardBase);
export const MemoSmallProjectCard = memo(SmallProjectCardBase);
