import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TerminalIcon from "@mui/icons-material/Terminal";
import PROFILE_IMAGE from "../../../public/images/person.webp";
import PageSection from "../layout/PageSection";
import { useLocale } from "../../providers/appState";
import { useTranslations } from "../../providers/i18nState";

const cardBase = {
  backgroundColor: "var(--app-surface-2)",
  border: "1px solid var(--app-border)",
  borderRadius: "1.5rem",
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: "var(--app-surface-hover)",
    border: "1px solid var(--app-border-strong)",
  },
};

export default function AboutSection() {
  const { t } = useTranslations();
  const { isRtl } = useLocale();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";
  const introTags = t("about.tags", []);
  const coreSkills = t("about.coreSkills", []);

  return (
    <PageSection id="about" variant="default">
      <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              ...cardBase,
              p: { xs: 5, md: 7 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                color: accent,
                fontSize: { xs: "1.75rem", md: "2rem" },
              }}
            >
              {t("about.title")}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "1.0625rem",
                color: "var(--app-text-secondary)",
                lineHeight: 1.75,
              }}
            >
              {t("about.description")}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", pt: 1 }}>
              {introTags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: "9999px",
                    backgroundColor: "var(--app-chip-bg)",
                    border: "1px solid var(--app-border)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: "0.75rem",
                      color: "var(--app-text)",
                    }}
                  >
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              ...cardBase,
              height: { xs: 320, md: "100%" },
              minHeight: 280,
              position: "relative",
              overflow: "hidden",
              borderRadius: "1.5rem",
            }}
          >
            <Box
              component="img"
              src={PROFILE_IMAGE}
              alt={t("about.profileName")}
              loading="lazy"
              decoding="async"
              width={880}
              height={1208}
              sizes="(max-width: 900px) 100vw, 25vw"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%)",
                opacity: 0.7,
                transition: "all 0.7s ease",
                "&:hover": { filter: "grayscale(0)", opacity: 1 },
              }}
            />
              <Box
              sx={{
                position: "absolute",
                bottom: 24,
                insetInlineStart: 24,
                insetInlineEnd: 24,
                p: 3,
                backgroundColor: isLight ? "rgba(255,255,255,0.84)" : "rgba(2,6,23,0.72)",
                backdropFilter: "blur(24px)",
                borderRadius: "1rem",
                border: isLight ? "1px solid rgba(15,23,42,0.08)" : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--app-text)",
                }}
              >
                {t("about.profileName")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: "0.75rem",
                  color: accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {t("about.profileRole")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                ...cardBase,
                backgroundColor: isLight ? "var(--app-surface-1)" : "var(--app-surface-3)",
                p: { xs: 5, md: 7 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <TerminalIcon sx={{ color: accent, fontSize: "2.5rem", mb: 3 }} />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  color: "var(--app-text)",
                  mb: 2,
                  fontSize: "1.5rem",
                }}
              >
                {t("about.coreResumeTitle")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  color: "var(--app-text-secondary)",
                }}
              >
                {t("about.coreResumeText")}
              </Typography>
            </Box>
            <Grid
              container
              spacing={2}
              sx={{ pt: 4, mt: 4, borderTop: "1px solid var(--app-border)" }}
            >
              {coreSkills.map((skill) => (
                <Grid size={{ xs: 6 }} key={skill}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#a3a6ff",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Manrope", sans-serif',
                        fontSize: "0.875rem",
                        color: "var(--app-text)",
                      }}
                    >
                      {skill}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              ...cardBase,
              backgroundColor: isLight ? "var(--app-surface-0)" : "rgba(25,37,64,0.4)",
              backdropFilter: "blur(12px)",
              p: { xs: 5, md: 7 },
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
              <Box
                sx={{
                  maxWidth: "32rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
              <Typography
                component="h3"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "1.875rem" },
                  color: "var(--app-text)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                &ldquo;{t("about.philosophyQuote")}&rdquo;
              </Typography>
              <Box sx={{ pt: 3 }}>
                <Box
                  component="a"
                  href="#resume"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: accent,
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover .arrow-icon": {
                      transform: isRtl
                        ? "translateX(-4px) scaleX(-1)"
                        : "translateX(4px)",
                    },
                  }}
                >
                  {t("about.learnMore")}
                  <ArrowRightAltIcon
                    className="arrow-icon"
                    sx={{ transition: "transform 0.2s ease" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
}
