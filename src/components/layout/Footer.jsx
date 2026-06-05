import { Box, Container, Typography } from "@mui/material";
import { SITE_NAME, SOCIAL_LINKS } from "../../content/site";
import myLogo from "../../../public/images/mylogo-rbg.webp";
import { useLocale } from "../../providers/appState";
import { useTranslations } from "../../providers/i18nState";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const { t } = useTranslations();
  const { isRtl } = useLocale();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--app-surface-0)",
        borderTop: "1px solid var(--app-border)",
        py: { xs: 2, md: 4 },
        px: { xs: 1.5, sm: 2, md: 4 },
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "80rem !important" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", md: isRtl ? "right" : "left" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: isRtl ? "flex-end" : "flex-start" },
                alignItems: "center",
                gap: 0.5,
                flexWrap: "wrap",
              }}
            >
              <Box
                component="img"
                src={myLogo}
                alt={t("navbar.logoAlt")}
                width={511}
                height={488}
                decoding="async"
                sx={{ width: { xs: 56, md: 70 } }}
              />
              <Typography
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  color: "var(--app-text)",
                  fontSize: "1.125rem",
                  mb: 0.25,
                }}
              >
                {SITE_NAME}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "0.875rem",
                letterSpacing: "0.025em",
                color: "var(--app-text-secondary)",
                opacity: 0.8,
              }}
            >
              {t("footer.rights", "", { year })}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2.5, sm: 3, md: 5 },
              flexWrap: "wrap",
              justifyContent: "center",
              width: { xs: "100%", md: "auto" },
            }}
          >
            {SOCIAL_LINKS.map(({ label, href }) => (
              <Typography
                key={label}
                component="a"
                href={href}
                target="_blank"
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "0.875rem",
                  letterSpacing: "0.025em",
                  color: "var(--app-text-secondary)",
                  textDecoration: "none",
                  opacity: 0.8,
                  transition: "all 0.4s ease",
                  textUnderlineOffset: "8px",
                  "&:hover": {
                    color: isLight ? "#4d54ff" : "#818cf8",
                    opacity: 1,
                  },
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
