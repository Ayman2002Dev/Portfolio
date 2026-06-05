import { Box, Button, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { FeaturedProjectCard } from "../components/ui/ProjectCard";
import PageSection from "../components/layout/PageSection";
import SectionHeader from "../components/ui/SectionHeader";
import { PROJECTS } from "../data";
import { useTranslations } from "../providers/i18nState";

const FILTERS = [
  { value: "all", labelKey: "all" },
  { value: "html&css", labelKey: "htmlCss" },
  { value: "javascript", labelKey: "javascript" },
  { value: "typescript", labelKey: "typescript" },
  { value: "react", labelKey: "react" },
  { value: "node", labelKey: "node" },
];

export default function WorkPage() {
  const [projectsView, setProjectsView] = useState(6);
  const [filter, setFilter] = useState("all");
  const { t } = useTranslations();

  const handleShowMore = useCallback(() => {
    setProjectsView((prev) => prev + 5);
  }, []);

  const handleFilter = useCallback((_, nextFilter) => {
    if (nextFilter !== null) {
      setFilter(nextFilter);
      setProjectsView(6);
    }
  }, []);

  const projectsVisible = useMemo(() => {
    const filteredProjects =
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter(
            (project) => project.keyword.toLowerCase() === filter,
          );

    return filteredProjects.slice(0, projectsView);
  }, [filter, projectsView]);

  return (
    <PageSection id="work" variant="soft">
      <SectionHeader
        eyebrow={t("work.eyebrow")}
        component="h1"
        title={
          <>
            {t("work.titlePrefix")}{" "}
            <Box component="span" sx={{ color: "#6063ee" }}>
              {t("work.titleAccent")}
            </Box>
          </>
        }
        description={t("work.description")}
      />

      {/* Projects Bento Grid */}
      <Box sx={{ mb: { xs: 1, md: 2 } }}>
        {/* Projects Filter */}
        <Box
          sx={{
            mb: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "auto",
          }}
        >
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilter}
            aria-label={t("work.filtersLabel")}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
              "& .MuiToggleButtonGroup-grouped": {
                border: "1px solid var(--app-border)",
                borderRadius: "9999px !important",
                px: 2,
                py: 1,
                color: "var(--app-text)",
                textTransform: "none",
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 700,
                letterSpacing: "0.01em",
              },
            }}
          >
            {FILTERS.map((item) => (
              <ToggleButton key={item.value} value={item.value}>
                {t(`work.filters.${item.labelKey}`)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {projectsVisible.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <FeaturedProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
        {projectsVisible.length === projectsView && (
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
            {t("common.showMore")}
          </Button>
        )}
      </Box>
    </PageSection>
  );
}
