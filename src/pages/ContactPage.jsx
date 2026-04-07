import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SendIcon from "@mui/icons-material/Send";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { SOCIAL_CHANNELS } from "../data";

const SOCIAL_ICON_MAP = {
  code: CodeIcon,
  work: WorkIcon,
  chat: ChatIcon,
  rss_feed: RssFeedIcon,
};

const inputSx = {
  "& .MuiInput-root": {
    color: "#dee5ff",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
  "& .MuiInput-underline:before": { borderBottomColor: "rgba(64,72,93,0.4)" },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "rgba(64,72,93,0.6) !important",
  },
  "& .MuiInput-underline:after": { borderBottomColor: "#a3a6ff" },
  "& .MuiInputLabel-root": {
    color: "#a3aac4",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#a3a6ff" },
  "& .MuiInputLabel-root.Mui-error": { color: "#ff6e84" },
  "& .MuiInput-underline.Mui-error:after": { borderBottomColor: "#ff6e84" },
  "& .MuiFormHelperText-root": {
    fontFamily: '"Manrope", sans-serif',
    fontSize: "0.75rem",
  },
};

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

function ContactInfoCard({
  icon,
  title,
  description,
  link,
  linkLabel,
  color = "#a3a6ff",
}) {
  const Icon = icon;
  return (
    <Box
      id="contact"
      sx={{
        ...cardBase,
        p: { xs: 3.5, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 128,
          height: 128,
          backgroundColor: `${color}0d`,
          borderRadius: "50%",
          mr: -8,
          mt: -8,
          filter: "blur(24px)",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "0.75rem",
            backgroundColor: "#141f38",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={{ color, fontSize: "1.375rem" }} />
        </Box>
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "#dee5ff",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          color: "#a3aac4",
          mb: 1.5,
        }}
      >
        {description}
      </Typography>
      {link && (
        <Typography
          component="a"
          href={link}
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.0625rem",
            color,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: `${color}50`,
            },
          }}
        >
          {linkLabel}
        </Typography>
      )}
    </Box>
  );
}

function AvailabilityCard() {
  return (
    <Box
      sx={{
        ...cardBase,
        p: { xs: 3.5, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 128,
          height: 128,
          backgroundColor: "rgba(193,128,255,0.05)",
          borderRadius: "50%",
          mr: -8,
          mt: -8,
          filter: "blur(24px)",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "0.75rem",
            backgroundColor: "#141f38",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccessTimeIcon sx={{ color: "#c180ff", fontSize: "1.375rem" }} />
        </Box>
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "#dee5ff",
          }}
        >
          Availability
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          color: "#a3aac4",
          mb: 2,
        }}
      >
        Sat – Thu • 9 AM – 10 PM
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <FiberManualRecordIcon
          sx={{ color: "#c890ff", fontSize: "0.875rem" }}
        />
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontSize: "0.875rem",
            color: "#c890ff",
            fontWeight: 600,
          }}
        >
          Open to new projects
        </Typography>
      </Box>
    </Box>
  );
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      setSubmitting(true);
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/27009778/u7tezl2/",
        {
          method: "POST",
          body: formData,
        },
      );
      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent! I'll be in touch soon.",
          severity: "success",
        });
        reset();
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Faild to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        px: { xs: 1.5, md: 4 },
        minHeight: "100vh",
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(163,166,255,0.04) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(193,128,255,0.04) 0%, transparent 50%)
        `,
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "80rem !important" }}>
        {/* Page Header */}
        <Box
          component="header"
          sx={{ mb: { xs: 10, md: 14 }, textAlign: "center" }}
        >
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
            Let's Build{" "}
            <Box
              component="span"
              sx={{
                backgroundImage: "linear-gradient(135deg, #a3a6ff, #c180ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Something
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "1.125rem",
              color: "#a3aac4",
              maxWidth: "36rem",
              mx: "auto",
              lineHeight: 1.75,
            }}
          >
            Have a project in mind, or just want to talk tech? My inbox is
            always open.
          </Typography>
        </Box>

        {/* Main Content Bento Grid */}
        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {/* Left Column — Contact channels */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
              }}
            >
              <ContactInfoCard
                icon={EmailIcon}
                title="Direct Email"
                description="Typically replies within 24 hours."
                link="mailto:ayman.osama.dev@gmail.com"
                linkLabel="ayman.osama.dev@gmail.com"
                color="#a3a6ff"
              />
              <AvailabilityCard />

              {/* Social Links Grid */}
              <Grid container spacing={2}>
                {SOCIAL_CHANNELS.map((channel) => {
                  const Icon = SOCIAL_ICON_MAP[channel.icon] || CodeIcon;
                  return (
                    <Grid size={{ xs: 12, md: 6 }} key={channel.label}>
                      <Box
                        component="a"
                        href={channel.href}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1.5,
                          p: 3,
                          borderRadius: "1.25rem",
                          backgroundColor: "#091328",
                          border: "1px solid transparent",
                          textDecoration: "none",
                          transition: "all 0.4s ease",
                          "&:hover": {
                            backgroundColor: "#1f2b49",
                            borderColor: `${channel.color}33`,
                          },
                        }}
                      >
                        <Icon
                          sx={{ color: channel.color, fontSize: "1.75rem" }}
                        />
                        <Typography
                          sx={{
                            fontFamily: '"Manrope", sans-serif',
                            fontWeight: 700,
                            fontSize: "0.875rem",
                            color: "#dee5ff",
                          }}
                        >
                          {channel.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: "0.75rem",
                            color: "#a3aac4",
                            textAlign: "center",
                          }}
                        >
                          {channel.handle}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>

          {/* Right Column — Contact Form */}
          <Grid item size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                ...cardBase,
                p: { xs: 4, md: 6 },
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative glow */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -96,
                  right: -96,
                  width: 384,
                  height: 384,
                  backgroundColor: "rgba(163,166,255,0.10)",
                  borderRadius: "50%",
                  filter: "blur(120px)",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: "1.75rem", md: "2rem" },
                      mb: 1,
                      color: "#dee5ff",
                    }}
                  >
                    Send a Message
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      color: "#a3aac4",
                    }}
                  >
                    I'm excited to hear about your project goals.
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Your Name"
                        variant="standard"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        sx={inputSx}
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Email Address"
                        variant="standard"
                        fullWidth
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={inputSx}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label="Subject"
                        variant="standard"
                        fullWidth
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                        sx={inputSx}
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label="Your Message"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={5}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        sx={{
                          ...inputSx,
                          "& .MuiInput-root": {
                            ...inputSx["& .MuiInput-root"],
                            alignItems: "flex-start",
                          },
                        }}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 20,
                            message: "Message must be at least 20 characters",
                          },
                        })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={submitting}
                        endIcon={
                          submitting ? (
                            <CircularProgress size={18} color="inherit" />
                          ) : (
                            <SendIcon />
                          )
                        }
                        sx={{
                          px: 6,
                          py: 2,
                          borderRadius: "0.75rem",
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontWeight: 700,
                          fontSize: "1rem",
                          backgroundColor: "#a3a6ff",
                          color: "#0f00a4",
                          "&:hover": {
                            backgroundColor: "#6063ee",
                            boxShadow: "0 0 20px rgba(163,166,255,0.25)",
                          },
                          "&:disabled": {
                            backgroundColor: "rgba(163,166,255,0.3)",
                            color: "rgba(15,0,164,0.5)",
                          },
                          transition: "all 0.4s ease",
                        }}
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            backgroundColor: "#0f1930",
            color: "#dee5ff",
            border: "1px solid rgba(64,72,93,0.3)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
