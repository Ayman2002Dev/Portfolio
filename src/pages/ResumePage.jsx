import { Box, Container, Grid, Typography } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import DnsIcon from "@mui/icons-material/Dns";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import { SKILLS, EDUCATION, CERTIFICATES } from "../data";
import CertificateCard from "../components/ui/CertificateCard";

const ICON_MAP = { web: WebIcon, dns: DnsIcon, build: BuildIcon };

const cardBase = {
  backgroundColor: "#0f1930",
  border: "1px solid rgba(64,72,93,0.15)",
  borderRadius: "1.5rem",
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: "#192540",
    border: "1px solid rgba(163,166,255,0.2)",
  },
};

function SkillCard({ skill }) {
  const Icon = ICON_MAP[skill?.icon] || WebIcon;
  return (
    <Box sx={{ ...cardBase, p: { xs: 4, md: 5 }, height: "100%" }}>
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
              color: "#dee5ff",
              mb: 0.75,
              fontSize: "1.375rem",
            }}
          >
            {skill?.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "0.875rem",
              color: "#a3aac4",
            }}
          >
            {skill?.subtitle}
          </Typography>
        </Box>
        <Icon
          sx={{ color: "#a3a6ff", fontSize: "2.5rem", ml: 2, flexShrink: 0 }}
        />
      </Box>

      <Grid container spacing={3}>
        {skill?.items.map((item) => (
          <Grid item xs={12} sm={6} key={item.name}>
            <Box
              sx={{ mb: 0.75, display: "flex", alignItems: "center", gap: 1 }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#c890ff",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#dee5ff",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function ExperienceItem({ exp, isLast }) {
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
            backgroundColor: "#a3a6ff",
            flexShrink: 0,
          }}
        />
        {!isLast && (
          <Box
            sx={{
              width: 1,
              flex: 1,
              backgroundColor: "rgba(64,72,93,0.3)",
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
                color: "#dee5ff",
              }}
            >
              {exp.role}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                color: "#a3a6ff",
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
              color: "#a3aac4",
              whiteSpace: "nowrap",
            }}
          >
            {exp.period}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            color: "#a3aac4",
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
                backgroundColor: "#091328",
                borderRadius: "9999px",
                border: "1px solid rgba(64,72,93,0.15)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#a3aac4",
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
  return (
    <Box
      id="resume"
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        px: { xs: 1.5, md: 4 },
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <Box
        sx={{
          position: "absolute",
          top: -96,
          left: -96,
          width: 384,
          height: 384,
          backgroundColor: "rgba(163,166,255,0.05)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -48,
          right: -48,
          width: 256,
          height: 256,
          backgroundColor: "rgba(193,128,255,0.05)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ maxWidth: "80rem !important", position: "relative", zIndex: 1 }}
      >
        {/* Hero Title */}
        <Box component="section" sx={{ mb: { xs: 10, md: 14 } }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "3rem", md: "5.5rem" },
              letterSpacing: "-0.05em",
              color: "#dee5ff",
              mb: 3,
              lineHeight: 1,
            }}
          >
            My Tech{" "}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box component="span" sx={{ color: "#a3a6ff" }}>
              Stack & Journey
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "1.125rem",
              color: "#a3aac4",
              maxWidth: "42rem",
              lineHeight: 1.75,
            }}
          >
            Here you can find a summary of my professional journey, including my
            education, key technical skills, and completed courses. This section
            highlights the experience and knowledge that shape the way I build
            user-friendly and efficient web applications.
          </Typography>
        </Box>

        {/* Technical Arsenal */}
        <Box component="section" sx={{ mb: { xs: 8, md: 12 } }}>
          <Box component="header" sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                letterSpacing: "-0.025em",
                color: "#dee5ff",
                mb: 2,
              }}
            >
              Technical Arsenal
            </Typography>
            <Box
              sx={{
                height: 4,
                width: 80,
                backgroundColor: "#a3a6ff",
                borderRadius: 1,
              }}
            />
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SkillCard skill={SKILLS.frontend} />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SkillCard skill={SKILLS.backend} />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <SkillCard skill={SKILLS.tools} />
            </Grid>
          </Grid>
        </Box>

        {/*Education side by side */}
        <Box component="section">
          <Box component="header" sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                letterSpacing: "-0.025em",
                color: "#dee5ff",
                mb: 2,
              }}
            >
              Education
            </Typography>
            <Box
              sx={{
                height: 4,
                width: 80,
                backgroundColor: "#a3a6ff",
                borderRadius: 1,
              }}
            />
          </Box>
          <Grid container spacing={4}>
            {/* Education */}
            <Grid size={12}>
              <Box sx={{ ...cardBase, p: { xs: 4, md: 6 }, height: "100%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 7 }}
                >
                  <SchoolIcon sx={{ color: "#c890ff", fontSize: "1.75rem" }} />
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "#dee5ff",
                    }}
                  >
                    Education
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
                          ? "1px solid rgba(64,72,93,0.2)"
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
                          color: "#dee5ff",
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Manrope", sans-serif',
                          fontSize: "0.8125rem",
                          color: "#a3aac4",
                        }}
                      >
                        {edu.period}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        color: "#a3a6ff",
                        fontSize: "0.9375rem",
                        mb: 1,
                      }}
                    >
                      {edu.school}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: "0.875rem",
                        color: "#a3aac4",
                        lineHeight: 1.75,
                      }}
                    >
                      {edu.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Certificates Section */}
        <Box component="section" sx={{ mt: { xs: 8, md: 12 } }}>
          <Box component="header" sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                letterSpacing: "-0.025em",
                color: "#dee5ff",
                mb: 2,
              }}
            >
              Verified Certificates
            </Typography>
            <Box
              sx={{
                height: 4,
                width: 80,
                backgroundColor: "#a3a6ff",
                borderRadius: 1,
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {CERTIFICATES.map((cert) => (
              <Grid sizekey={cert.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <CertificateCard cert={cert} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
