import { useCallback, useEffect, useState } from "react";
import myLogo from "../../../public/images/mylogo-rbg.webp";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { NAV_ITEMS, RESUME_URL } from "../../content/site";
import { useLocale, useThemeMode } from "../../providers/appState";
import { useTranslations } from "../../providers/i18nState";
import AppButton from "../ui/AppButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });
  const { locale, isRtl, navigateToLocale } = useLocale();
  const { themeMode, toggleTheme } = useThemeMode();
  const { t } = useTranslations();
  const isLight = themeMode === "light";

  const [currentLabel, setCurrentLabel] = useState("home");

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    for (let section of NAV_ITEMS) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;

        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          setCurrentLabel(section.id);
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLocaleChange = useCallback(
    (nextLocale) => {
      if (nextLocale !== locale) {
        navigateToLocale(nextLocale);
        setMobileOpen(false);
      }
    },
    [locale, navigateToLocale],
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          width: {
            xs: "calc(100% - 32px)",
            md: "calc(100% - 64px)",
            lg: "72rem",
          },
          maxWidth: "72rem",
          borderRadius: "9999px",
          backgroundColor: scrolled
            ? "var(--app-nav-bg-scrolled)"
            : "var(--app-nav-bg)",
          backdropFilter: "blur(24px)",
          border: "1px solid var(--app-nav-border)",
          boxShadow: isLight
            ? "0 16px 32px rgba(15, 23, 42, 0.08)"
            : "0 20px 40px rgba(163, 166, 255, 0.08)",
          transition: "background-color 0.4s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: isRtl ? "row-reverse" : "row",
            px: { xs: 2.5, md: 4 },
            py: 0.5,
            minHeight: "56px !important",
          }}
        >
          <Box
            component="a"
            href="#home"
            sx={{
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={myLogo}
              alt={t("navbar.logoAlt")}
              width={511}
              decoding="async"
              sx={{ maxWidth: 50 }}
            />
          </Box>

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
              flexDirection: isRtl ? "row-reverse" : "row",
            }}
          >
            {NAV_ITEMS.map(({ id }) => {
              const isActive = id === currentLabel;
              return (
                <Typography
                  key={id}
                  component="a"
                  href={`#${id}`}
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    letterSpacing: "-0.025em",
                    bgcolor: isActive ? "var(--app-surface-3)" : "transparent",
                    textDecoration: "none",
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#4d54ff",
                      backgroundColor: isLight
                        ? "var(--app-surface-3)"
                        : "transparent",
                    },
                    direction: "inherit",
                    color: "var(--app-text)",
                  }}
                >
                  {t(`nav.${id}`)}
                </Typography>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: isRtl ? "row-reverse" : "row",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 0.75,
                p: 0.5,
                borderRadius: "9999px",
                border: "1px solid var(--app-border)",
                backgroundColor: isLight
                  ? "var(--app-surface-0)"
                  : "rgba(15, 25, 48, 0.55)",
                boxShadow: isLight
                  ? "0 10px 24px rgba(15, 23, 42, 0.05)"
                  : "none",
              }}
            >
              <AppButton
                size="small"
                onClick={() => handleLocaleChange("en")}
                variant={locale === "en" ? "contained" : "text"}
                sx={{
                  minWidth: 0,
                  px: 1.5,
                  py: 0.8,
                  color: locale === "en" ? "#0f00a4" : "var(--app-text)",
                  backgroundColor: locale === "en" ? "#a3a6ff" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      locale === "en" ? "#636cff" : "rgba(77,84,255,0.1)",
                  },
                }}
              >
                {t("common.english")}
              </AppButton>
              <AppButton
                size="small"
                onClick={() => handleLocaleChange("ar")}
                variant={locale === "ar" ? "contained" : "text"}
                sx={{
                  minWidth: 0,
                  px: 1.5,
                  py: 0.8,
                  color: locale === "ar" ? "#0f00a4" : "var(--app-text)",
                  backgroundColor: locale === "ar" ? "#a3a6ff" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      locale === "ar" ? "#636cff" : "rgba(77,84,255,0.1)",
                  },
                }}
              >
                {t("common.arabic")}
              </AppButton>
            </Box>
            <AppButton
              component="a"
              download={true}
              variant="contained"
              size="small"
              href={RESUME_URL}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              {t("common.resume")}
            </AppButton>
            <IconButton
              aria-label={t("navbar.themeSwitchLabel")}
              onClick={toggleTheme}
              sx={{
                color: "var(--app-text)",
                border: "1px solid var(--app-border)",
                backgroundColor: isLight
                  ? "var(--app-surface-0)"
                  : "var(--app-surface-2)",
                boxShadow: isLight
                  ? "0 10px 24px rgba(15, 23, 42, 0.05)"
                  : "none",
              }}
            >
              {themeMode === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton
              sx={{
                display: { md: "none" },
                color: "var(--app-text)",
                border: "1px solid var(--app-border)",
                backgroundColor: isLight
                  ? "var(--app-surface-0)"
                  : "var(--app-surface-2)",
                boxShadow: isLight
                  ? "0 10px 24px rgba(15, 23, 42, 0.05)"
                  : "none",
              }}
              aria-label={t("navbar.openMenuLabel")}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={isRtl ? "left" : "right"}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: isLight
              ? "var(--app-surface-0)"
              : "var(--app-surface-1)",
            borderLeft: isRtl ? "none" : "1px solid var(--app-border-strong)",
            borderRight: isRtl ? "1px solid var(--app-border-strong)" : "none",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            aria-label={t("navbar.closeMenuLabel")}
            onClick={() => setMobileOpen(false)}
            sx={{ color: "var(--app-text)" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2, direction: isRtl ? "rtl" : "ltr" }}>
          {NAV_ITEMS.map(({ id }) => {
            const isActive = id === currentLabel;

            return (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    bgcolor: isActive ? "var(--app-surface-3)" : "transparent",
                    px: 2,
                    py: 1,
                    "&:hover": { backgroundColor: "rgba(77, 84, 255, 0.08)" },
                    textAlign: isRtl ? "right" : "left",
                  }}
                >
                  <ListItemText
                    primary={t(`nav.${id}`)}
                    primaryTypographyProps={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem sx={{ px: 2, py: 1 }}>
            <AppButton
              component="a"
              download={true}
              href={RESUME_URL}
              fullWidth
              variant="contained"
            >
              {t("common.resume")}
            </AppButton>
          </ListItem>
          <ListItem sx={{ px: 2, py: 1 }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                gap: 1,
              }}
            >
              <AppButton
                fullWidth
                variant={locale === "en" ? "contained" : "outlined"}
                startIcon={<LanguageIcon />}
                onClick={() => handleLocaleChange("en")}
              >
                {t("common.english")}
              </AppButton>
              <AppButton
                fullWidth
                variant={locale === "ar" ? "contained" : "outlined"}
                startIcon={<LanguageIcon />}
                onClick={() => handleLocaleChange("ar")}
              >
                {t("common.arabic")}
              </AppButton>
            </Box>
          </ListItem>
          <ListItem sx={{ px: 2, py: 1 }}>
            <AppButton
              fullWidth
              variant="outlined"
              startIcon={
                themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />
              }
              onClick={toggleTheme}
            >
              {themeMode === "dark" ? t("theme.light") : t("theme.dark")}
            </AppButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
