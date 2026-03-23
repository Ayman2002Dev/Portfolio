import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FeaturedProjectCard } from "../components/ui/ProjectCard";
import SectionLabel from "../components/ui/SectionLabel";
import { PROJECTS } from "../data";
import { useEffect, useState } from "react";

const tabs = ["All", "Html&Css", "JavaScript", "TypeScript", "React", "Node"];

export default function WorkPage() {
  const [projectsView, setProjectsView] = useState(6);
  const [tabIndex, setTabIndex] = useState(0);
  const [projectsVisiable, setprojectsVisiable] = useState(
    PROJECTS.slice(0, projectsView),
  );

  const handleShowMore = () => {
    setProjectsView((prev) => prev + 5);
  };

  const handleFilter = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    if (tabIndex === 0) {
      setprojectsVisiable(PROJECTS.slice(0, projectsView));
      return;
    }

    const projects = PROJECTS.filter(
      (project) =>
        project.keyword.toLowerCase() === tabs[tabIndex].toLowerCase(),
    );
    setprojectsVisiable(projects.slice(0, projectsView));
  }, [projectsView, tabIndex]);

  return (
    <Box
      id="work"
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        px: { xs: 1.5, md: 4 },
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(163,166,255,0.05) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(193,128,255,0.05) 0%, transparent 50%)
        `,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "80rem !important" }}>
        {/* Page Header */}
        <Box component="header" sx={{ mb: { xs: 10, md: 14 } }}>
          <SectionLabel>Portfolio</SectionLabel>
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "3rem", md: "5rem" },
              letterSpacing: "-0.05em",
              color: "#dee5ff",
              mb: 3,
              lineHeight: 1,
            }}
          >
            Explore My{" "}
            <Box component="span" sx={{ color: "#6063ee" }}>
              Works
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
            A collection of projects showcasing my work in building responsive,
            user-friendly web applications. Each project reflects clean code,
            practical problem-solving, and attention to performance and
            maintainability.
          </Typography>
        </Box>

        {/* Projects Bento Grid */}
        <Box
          sx={{
            mb: { xs: 1, md: 2 },
          }}
        >
          {/* Projects Filter */}
          <Box
            sx={{
              mb: 5,
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {tabs.map((tab, index) => (
              <Button
                disableRipple
                onClick={() => handleFilter(index)}
                key={tab}
                sx={{
                  bgcolor: tabIndex === index ? "#0f1930" : "transparent",
                  color: "white",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#a3a6ff" },
                }}
              >
                {tab}
              </Button>
            ))}
          </Box>
          <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
            {/* Featured Project 1 — 8 cols */}
            {projectsVisiable.map((project) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                <FeaturedProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
          {projectsView <= projectsVisiable.length && (
            <Button
              variant="contained"
              sx={{
                display: "block",
                borderRadius: "9999px",
                mt: 5,
                maxWidth: "106.88px",
                mx: "auto",
              }}
              onClick={handleShowMore}
            >
              Show More
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
