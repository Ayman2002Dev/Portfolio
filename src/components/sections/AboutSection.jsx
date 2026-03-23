import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TerminalIcon from "@mui/icons-material/Terminal";
import PROFILE_IMAGE from "../../../public/images/person.png";

const cardBase = {
  backgroundColor: "#0f1930",
  border: "1px solid rgba(64,72,93,0.15)",
  borderRadius: "1.5rem",
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: "#192540",
    border: "1px solid rgba(163,166,255,0.25)",
  },
};

const dotColors = [
  "#a3a6ff",
  "#c180ff",
  "#c890ff",
  "#6063ee",
  "#a3a6ff",
  "#c180ff",
  "#c890ff",
  "#6063ee",
];
const coreSkills = [
  "ٌReact.js",
  "Next.js",
  "TypeScript",
  "Redux",
  "MUI",
  "RHF",
  "Tailwind Css",
  "Vercel",
];
const introTags = [
  "Frontend Developer",
  "Backend Developer",
  "System Design",
  "Modern Web Technologies",
  "Responsive Web Apps",
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 12, md: 16 }, px: { xs: 1.5, md: 4 } }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "80rem !important" }}>
        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {/* Intro Card — col-span-8 */}
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
                  color: "#a3a6ff",
                  fontSize: { xs: "1.75rem", md: "2rem" },
                }}
              >
                About Me
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "1.0625rem",
                  color: "#a3aac4",
                  lineHeight: 1.75,
                }}
              >
                I’m Ayman Osama, a Frontend Developer passionate about building
                modern and responsive web applications. I specialize in React,
                Next.js, and modern JavaScript libraries to create clean,
                user-friendly interfaces. I also have a solid intermediate
                understanding of backend development using Node.js, which helps
                me build full-stack projects. I’m skilled at problem-solving and
                enjoy turning ideas into real-world applications. I continuously
                work on improving my skills and staying up to date with the
                latest technologies to deliver efficient and scalable solutions.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", pt: 1 }}>
                {introTags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      px: 2,
                      py: 0.75,
                      borderRadius: "9999px",
                      backgroundColor: "#091328",
                      border: "1px solid rgba(64,72,93,0.10)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Manrope", sans-serif',
                        fontSize: "0.75rem",
                        color: "#dee5ff",
                      }}
                    >
                      {tag}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Profile Card — col-span-4 */}
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
                alt="Ayman Osama"
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
                  left: 24,
                  right: 24,
                  p: 3,
                  backgroundColor: "rgba(2,6,23,0.8)",
                  backdropFilter: "blur(24px)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#dee5ff",
                  }}
                >
                  Ayman Osama
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: "0.75rem",
                    color: "#a3a6ff",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Frontend Developer
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Core Resume Card — col-span-5 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                ...cardBase,
                backgroundColor: "#141f38",
                p: { xs: 5, md: 7 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <TerminalIcon
                  sx={{ color: "#c180ff", fontSize: "2.5rem", mb: 3 }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    color: "#dee5ff",
                    mb: 2,
                    fontSize: "1.5rem",
                  }}
                >
                  Core Resume
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    color: "#a3aac4",
                  }}
                >
                  I specialize in React and Next.js, building interactive,
                  responsive, and user-friendly interfaces. I focus on creating
                  seamless experiences for users with clean, maintainable, and
                  efficient code.
                </Typography>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{ pt: 4, mt: 4, borderTop: "1px solid rgba(64,72,93,0.2)" }}
              >
                {coreSkills.map((skill, i) => (
                  <Grid item xs={6} key={skill}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: dotColors[i],
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: '"Manrope", sans-serif',
                          fontSize: "0.875rem",
                          color: "#dee5ff",
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

          {/* Philosophy Card — col-span-7 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                ...cardBase,
                backgroundColor: "rgba(25,37,64,0.4)",
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
                    color: "#dee5ff",
                    fontStyle: "italic",
                    lineHeight: 1.4,
                  }}
                >
                  "I build software that works and feels intuitive. I focus on
                  solving real problems for users, writing clean, maintainable
                  code that makes their experience smoother."
                </Typography>
                <Box sx={{ pt: 3 }}>
                  <Box
                    component="a"
                    href="#resume"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#a3a6ff",
                      fontFamily: '"Manrope", sans-serif',
                      fontWeight: 700,
                      textDecoration: "none",
                      "&:hover .arrow-icon": { transform: "translateX(4px)" },
                    }}
                  >
                    Learn more about my process
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
      </Container>
    </Box>
  );
}
