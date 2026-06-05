import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WebIcon from "@mui/icons-material/Web";
import DnsIcon from "@mui/icons-material/Dns";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import { SKILLS, EDUCATION, CERTIFICATES } from "../data";
import CertificateCard from "../components/ui/CertificateCard";
import PageSection from "../components/layout/PageSection";
import SectionHeader from "../components/ui/SectionHeader";
import AppCard from "../components/ui/AppCard";
import { useTranslations } from "../providers/i18nState";

const ICON_MAP = { web: WebIcon, dns: DnsIcon, build: BuildIcon };

function SkillCard({ skill, skillKey }) {
  const Icon = ICON_MAP[skill?.icon] || WebIcon;
  const { t } = useTranslations();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";
  const items = t(`resume.skills.${skillKey}.items`, skill?.items?.map((item) => item.name) || []);

  return (
    <AppCard sx={{ p: { xs: 4, md: 5 }, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 5,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              color: "var(--app-text)",
              mb: 0.75,
              fontSize: "1.375rem",
            }}
          >
            {t(`resume.skills.${skillKey}.title`, skill?.title)}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "0.875rem",
              color: "var(--app-text-secondary)",
            }}
          >
            {t(`resume.skills.${skillKey}.subtitle`, skill?.subtitle)}
          </Typography>
        </Box>
        <Icon
          sx={{ color: accent, fontSize: "2.5rem", ml: 2, flexShrink: 0 }}
        />
      </Box>

      <Grid container spacing={3}>
          {items.map((item) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item}>
            <Box
              sx={{ mb: 0.75, display: "flex", alignItems: "center", gap: 1 }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: accent,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--app-text)",
                }}
              >
                {item}
              </Typography>
            </Box>
          </Grid>
          ))}
      </Grid>
    </AppCard>
  );
}

function ExperienceItem({ exp, isLast }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";

  return (
    <Box sx={{ display: "flex", gap: 3, pb: isLast ? 0 : 6 }}>
      {/* Timeline dot */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 0.5,
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: accent,
            flexShrink: 0,
          }}
        />
        {!isLast && (
          <Box
            sx={{
              width: 1,
              flex: 1,
              backgroundColor: "var(--app-border-strong)",
              mt: 1,
            }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1, pb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Box>
            <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--app-text)",
            }}
          >
            {exp.role}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                color: accent,
                fontSize: "0.9375rem",
              }}
            >
              {exp.company}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: "0.8125rem",
              color: "var(--app-text-secondary)",
              whiteSpace: "nowrap",
            }}
          >
            {exp.period}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            color: "var(--app-text-secondary)",
            lineHeight: 1.75,
            mb: 2,
            fontSize: "0.9375rem",
          }}
        >
          {exp.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {exp.tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 1.5,
                py: 0.5,
                backgroundColor: "var(--app-chip-bg)",
                borderRadius: "9999px",
                border: "1px solid var(--app-border)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "var(--app-text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function ResumePage() {
  const { t } = useTranslations();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const accent = isLight ? "#6063ee" : "#a3a6ff";
  return (
    <PageSection id="resume" variant="none" sx={{ minHeight: "100vh" }}>
      {/* Ambient glows */}
      <Box
          sx={{
            position: "absolute",
            top: -96,
            insetInlineStart: -96,
            width: 384,
            height: 384,
            backgroundColor: isLight ? "rgba(77,84,255,0.05)" : "rgba(163,166,255,0.05)",
            borderRadius: "50%",
            filter: "blur(120px)",
            pointerEvents: "none",
        }}
      />
      <Box
          sx={{
            position: "absolute",
            top: -48,
            insetInlineEnd: -48,
            width: 256,
            height: 256,
            backgroundColor: isLight ? "rgba(193,128,255,0.06)" : "rgba(193,128,255,0.05)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Title */}
        <SectionHeader
          component="h1"
          title={
            <>
              {t("resume.heroTitlePrefix")}{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: accent }}>
                {t("resume.heroTitleAccent")}
              </Box>
            </>
          }
          description={t("resume.heroDescription")}
          sx={{ mb: { xs: 10, md: 14 } }}
        />

        {/* Technical Arsenal */}
        <Box component="section" sx={{ mb: { xs: 8, md: 12 } }}>
          <SectionHeader
            eyebrow={t("resume.skillsEyebrow")}
            title={t("resume.skillsTitle")}
            sx={{ mb: { xs: 8, md: 10 } }}
          />

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SkillCard skill={SKILLS.frontend} skillKey="frontend" />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SkillCard skill={SKILLS.backend} skillKey="backend" />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SkillCard skill={SKILLS.tools} skillKey="tools" />
            </Grid>
          </Grid>
        </Box>

        {/*Education side by side */}
        <Box component="section">
          <SectionHeader
            eyebrow={t("resume.educationEyebrow")}
            title={t("resume.educationTitle")}
            sx={{ mb: { xs: 8, md: 12 } }}
          />
          <Grid container spacing={4}>
            {/* Education */}
            <Grid size={12}>
              <AppCard sx={{ p: { xs: 4, md: 6 }, height: "100%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 7 }}
                >
                  <SchoolIcon sx={{ color: accent, fontSize: "1.75rem" }} />
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "var(--app-text)",
                    }}
                  >
                    {t("resume.educationTitle")}
                  </Typography>
                </Box>
                {EDUCATION.map((edu, i) => (
                  <Box
                    key={edu.id}
                    sx={{
                      pb: i < EDUCATION.length - 1 ? 5 : 0,
                      mb: i < EDUCATION.length - 1 ? 5 : 0,
                      borderBottom:
                        i < EDUCATION.length - 1
                          ? "1px solid var(--app-border)"
                          : "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontWeight: 700,
                          fontSize: "1.0625rem",
                          color: "var(--app-text)",
                        }}
                      >
                        {t("resume.education.degree", edu.degree)}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Manrope", sans-serif',
                          fontSize: "0.8125rem",
                          color: "var(--app-text-secondary)",
                        }}
                      >
                        {t("resume.education.period", edu.period)}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: accent,
                        fontSize: "0.9375rem",
                        mb: 1,
                      }}
                    >
                      {t("resume.education.school", edu.school)}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: "0.875rem",
                        color: "var(--app-text-secondary)",
                        lineHeight: 1.75,
                      }}
                    >
                      {t("resume.education.description", edu.description)}
                    </Typography>
                  </Box>
                ))}
              </AppCard>
            </Grid>
          </Grid>
        </Box>

        {/* Certificates Section */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <SectionHeader
            eyebrow={t("resume.certificatesEyebrow")}
            title={t("resume.certificatesTitle")}
            sx={{ mb: { xs: 8, md: 10 } }}
          />

          <Grid container spacing={3}>
            {CERTIFICATES.map((cert) => (
              <Grid key={cert.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <CertificateCard cert={cert} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </PageSection>
  );
}
