import { Box, Tooltip, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TechChip from "../ui/TechChip";

const cardBase = {
  backgroundColor: "#0f1930",
  border: "1px solid rgba(64,72,93,0.15)",
  borderRadius: "1.5rem",
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: "#192540",
    border: "1px solid rgba(163,166,255,0.3)",
  },
};

export function FeaturedProjectCard({ project }) {
  return (
    <Box
      sx={{
        ...cardBase,
        height: "100%",
        minHeight: "323px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column" },
        justifyContent: "space-between",
        gap: 4,
        "&:hover .project-img": { opacity: 0.6 },
      }}
    >
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          height: { xs: "280px", md: "250px" },
          objectFit: "cover",
        }}
      />
      {/* Content */}
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
              color: "#dee5ff",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              color: "#a3aac4",
              maxWidth: "28rem",
              lineHeight: 1.75,
            }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
            {project.tags.map((t) => (
              <TechChip key={t} label={t} />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 4, mt: 3 }}>
          <Box
            component="a"
            href={project.liveLink}
            target="_blank"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              color: "#a3a6ff",
              textDecoration: "none",
              "&:hover .link-icon": { transform: "translate(2px,-2px)" },
            }}
          >
            Live Demo
            <OpenInNewIcon
              className="link-icon"
              sx={{ fontSize: "1rem", transition: "transform 0.2s ease" }}
            />
          </Box>
          <Box
            component="a"
            href={project.githubLink}
            target="_blank"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              color: "#a3aac4",
              textDecoration: "none",
              "&:hover": { color: "#dee5ff" },
              transition: "color 0.2s ease",
            }}
          >
            <CodeIcon sx={{ fontSize: "1rem" }} />
            GitHub
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function SmallProjectCard({ project }) {
  return (
    <Box
      sx={{
        ...cardBase,
        p: { xs: 4, md: 5 },
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ mb: "auto" }}>
        <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.25rem",
            mb: 2,
            color: "#dee5ff",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "0.875rem",
            color: "#a3aac4",
            lineHeight: 1.75,
          }}
        >
          {project.description}
        </Typography>
      </Box>

      <Box sx={{ pt: 4, mt: 4, borderTop: "1px solid rgba(64,72,93,0.10)" }}>
        <Box
          component="a"
          href={project.link}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            color: "#dee5ff",
            textDecoration: "none",
            "&:hover": { color: "#a3a6ff" },
            transition: "color 0.2s ease",
          }}
        >
          {project.linkLabel || "Explore Project"}
          <ChevronRightIcon />
        </Box>
      </Box>
    </Box>
  );
}
