import { useEffect, useState } from "react";
import myLogo from "../../../public/images/mylogo-rbg.png";
import {
  AppBar,
  Box,
  Button,
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
import { NAV_LINKS } from "../../data";
import resume from "../../../public/Files/Ayman_Osama_Frontend_CV.pdf";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const [currentLabel, setCurrentLabel] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let section of NAV_LINKS) {
        const element = document.getElementById(section.label.toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;

          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setCurrentLabel(section.label.toLowerCase());
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            ? "rgba(6, 14, 32, 0.85)"
            : "rgba(2, 6, 23, 0.6)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(64, 72, 93, 0.15)",
          boxShadow: "0 20px 40px rgba(163, 166, 255, 0.08)",
          transition: "background-color 0.4s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
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
              alt="My Logo"
              sx={{ maxWidth: 50 }}
            />
          </Box>

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map(({ label, path }) => {
              const isActive = label.toLowerCase() === currentLabel;
              return (
                <Typography
                  key={path}
                  component="a"
                  href={`#${label.toLowerCase()}`}
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    letterSpacing: "-0.025em",
                    bgcolor: isActive ? "#0f1930" : "transparent",
                    textDecoration: "none",
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#a3a6ff" },
                  }}
                >
                  {label}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              component="a"
              download={true}
              variant="contained"
              size="small"
              href={resume}
              sx={{
                display: { xs: "none", md: "inline-flex" },
                borderRadius: "9999px",
                px: 3,
                py: 1,
                fontSize: "0.875rem",
              }}
            >
              Resume
            </Button>
            <IconButton
              sx={{ display: { md: "none" }, color: "#dee5ff" }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "#091328",
            borderLeft: "1px solid rgba(64, 72, 93, 0.3)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "#dee5ff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = label.toLowerCase() === currentLabel;

            return (
              <ListItem key={path} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    bgcolor: isActive ? "#0f1930" : "transparent",
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    "&:hover": { backgroundColor: "rgba(163, 166, 255, 0.08)" },
                  }}
                >
                  <ListItemText
                    primary={label}
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
            <Button
              component="a"
              download={true}
              href={resume}
              fullWidth
              variant="contained"
              sx={{ borderRadius: "9999px" }}
            >
              Resume
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
