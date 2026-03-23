import { Box, Tooltip, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const ICON_MAP = {
  verified: VerifiedIcon,
  school: SchoolIcon,
  workspace_premium: WorkspacePremiumIcon,
};

export default function CertificateCard({ cert }) {
  const IconComponent = ICON_MAP[cert.icon] || VerifiedIcon;

  return (
    <Box
      sx={{
        backgroundColor: "#091328",
        border: "1px solid rgba(64,72,93,0.15)",
        borderRadius: "1.5rem",
        p: { xs: 3.5, md: 4 },
        transition: "all 0.4s ease",
        "&:hover": {
          backgroundColor: "#0f1930",
          border: "1px solid rgba(163,166,255,0.25)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <IconComponent sx={{ color: "#a3a6ff", fontSize: "2rem" }} />
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontSize: "0.75rem",
            color: "#a3aac4",
          }}
        >
          {cert.date}
        </Typography>
      </Box>
      <Tooltip title={cert.title}>
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.0625rem",
            color: "#dee5ff",
            mb: 0.75,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {cert.title}
        </Typography>
      </Tooltip>
      <Typography
        sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: "0.875rem",
          color: "#a3aac4",
        }}
      >
        {cert.issuer}
      </Typography>
    </Box>
  );
}
