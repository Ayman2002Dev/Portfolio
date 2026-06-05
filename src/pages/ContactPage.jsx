import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
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
import { motion, useReducedMotion } from "framer-motion";
import { SOCIAL_CHANNELS } from "../data";
import PageSection from "../components/layout/PageSection";
import SectionHeader from "../components/ui/SectionHeader";
import AppCard from "../components/ui/AppCard";
import { useTranslations } from "../providers/i18nState";

const SOCIAL_ICON_MAP = {
  code: CodeIcon,
  work: WorkIcon,
  chat: ChatIcon,
  rss_feed: RssFeedIcon,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    x: [0, 10, 0],
    scale: [1, 1.04, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const inputSx = {
  "& .MuiInput-root": {
    color: "var(--app-text)",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    transition: "transform 0.25s ease, color 0.25s ease",
    "&:hover": {
      color: "var(--app-text)",
    },
    "&.Mui-focused": {
      transform: "translateY(-1px)",
    },
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "var(--app-input-border)",
    transition: "border-bottom-color 0.25s ease",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "var(--app-input-border-hover) !important",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--app-input-border-focus)",
    transition: "border-bottom-color 0.25s ease",
  },
  "& .MuiInputLabel-root": {
    color: "var(--app-input-label)",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    transition: "color 0.25s ease, transform 0.25s ease",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--app-input-border-focus)",
  },
  "& .MuiInputLabel-root.Mui-error": { color: "#ff6e84" },
  "& .MuiInput-underline.Mui-error:after": { borderBottomColor: "#ff6e84" },
  "& .MuiFormHelperText-root": {
    fontFamily: '"Manrope", sans-serif',
    fontSize: "0.75rem",
    marginLeft: 0,
  },
};

function ContactInfoCard({ icon, title, description, link, linkLabel, color = "#a3a6ff" }) {
  const Icon = icon;

  return (
    <AppCard
      component={motion.div}
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      sx={{
        p: { xs: 3.5, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
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
            backgroundColor: "var(--app-surface-3)",
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
            color: "var(--app-text)",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          color: "var(--app-text-secondary)",
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
            transition: "color 0.25s ease, text-decoration-color 0.25s ease",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: `${color}50`,
            },
            "&:focus-visible": {
              outline: "2px solid var(--app-input-border-focus)",
              outlineOffset: 3,
              borderRadius: "0.25rem",
            },
          }}
        >
          {linkLabel}
        </Typography>
      )}
    </AppCard>
  );
}

function AvailabilityCard() {
  const { t } = useTranslations();

  return (
    <AppCard
      component={motion.div}
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      sx={{
        p: { xs: 3.5, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
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
            backgroundColor: "var(--app-surface-3)",
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
            color: "var(--app-text)",
          }}
        >
          {t("contact.availabilityTitle")}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          color: "var(--app-text-secondary)",
          mb: 2,
        }}
      >
        {t("contact.availabilityHours")}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <FiberManualRecordIcon sx={{ color: "#c890ff", fontSize: "0.875rem" }} />
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontSize: "0.875rem",
            color: "#c890ff",
            fontWeight: 600,
          }}
        >
          {t("contact.openToProjects")}
        </Typography>
      </Box>
    </AppCard>
  );
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const { t } = useTranslations();
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    async (data) => {
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
            message: t("contact.snackbarSuccess"),
            severity: "success",
          });
          reset();
        }
      } catch {
        setSnackbar({
          open: true,
          message: t("contact.snackbarError"),
          severity: "error",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [reset, t],
  );

  return (
    <PageSection id="contact" variant="default" sx={{ minHeight: "100vh" }}>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <Box
          component={motion.div}
          aria-hidden="true"
          animate={reduceMotion ? undefined : "animate"}
          variants={reduceMotion ? undefined : floatVariants}
          sx={{
            position: "absolute",
            top: { xs: 40, md: 20 },
            insetInlineStart: { xs: -80, md: 80 },
            width: { xs: 220, md: 320 },
            height: { xs: 220, md: 320 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(163,166,255,0.18) 0%, rgba(193,128,255,0.08) 35%, transparent 72%)",
            filter: "blur(18px)",
            opacity: 0.7,
          }}
        />
        <Box
          component={motion.div}
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, 16, 0], x: [0, -10, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
          sx={{
            position: "absolute",
            right: { xs: -100, md: 120 },
            bottom: { xs: 220, md: 80 },
            width: { xs: 260, md: 420 },
            height: { xs: 260, md: 420 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(77,84,255,0.16) 0%, rgba(193,128,255,0.08) 38%, transparent 72%)",
            filter: "blur(24px)",
            opacity: 0.65,
          }}
        />
      </Box>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={sectionVariants}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <SectionHeader
          align="center"
          component="h1"
          title={
            <>
              {t("contact.titlePrefix")}{" "}
              <Box
                component="span"
                sx={{
                  backgroundImage: "linear-gradient(135deg, #a3a6ff, #c180ff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {t("contact.titleAccent")}
              </Box>
            </>
          }
          description={t("contact.description")}
        />

        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              component={motion.div}
              variants={columnVariants}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
              }}
            >
              <ContactInfoCard
                icon={EmailIcon}
                title={t("contact.directEmailTitle")}
                description={t("contact.directEmailDescription")}
                link="mailto:ayman.osama.dev@gmail.com"
                linkLabel="ayman.osama.dev@gmail.com"
                color="#a3a6ff"
              />
              <AvailabilityCard />

              <Grid container spacing={2}>
                {SOCIAL_CHANNELS.map((channel) => {
                  const Icon = SOCIAL_ICON_MAP[channel.icon] || CodeIcon;

                  return (
                    <Grid size={{ xs: 12, md: 6 }} key={channel.label}>
                      <Box
                        component={motion.a}
                        href={channel.href}
                        whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1.5,
                          p: 3,
                          borderRadius: "1.25rem",
                          backgroundColor: "var(--app-surface-1)",
                          border: "1px solid transparent",
                          textDecoration: "none",
                          transition:
                            "transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                          boxShadow: "0 0 0 rgba(0,0,0,0)",
                          "&:hover": {
                            backgroundColor: "var(--app-surface-4)",
                            borderColor: `${channel.color}33`,
                            boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
                          },
                          "&:focus-visible": {
                            outline: "2px solid var(--app-input-border-focus)",
                            outlineOffset: 3,
                          },
                        }}
                      >
                        <Icon sx={{ color: channel.color, fontSize: "1.75rem" }} />
                        <Typography
                          sx={{
                            fontFamily: '"Manrope", sans-serif',
                            fontWeight: 700,
                            fontSize: "0.875rem",
                            color: "var(--app-text)",
                          }}
                        >
                          {channel.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: "0.75rem",
                            color: "var(--app-text-secondary)",
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

          <Grid size={{ xs: 12, lg: 7 }}>
            <AppCard
              component={motion.div}
              variants={columnVariants}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              sx={{
                p: { xs: 4, md: 6 },
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                component={motion.div}
                aria-hidden="true"
                animate={
                  reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.55, 0.82, 0.55] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }
                sx={{
                  position: "absolute",
                  bottom: -96,
                  insetInlineEnd: -96,
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
                      color: "var(--app-text)",
                    }}
                  >
                    {t("contact.formTitle")}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      color: "var(--app-text-secondary)",
                    }}
                  >
                    {t("contact.formSubtitle")}
                  </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label={t("contact.form.name")}
                        variant="standard"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        sx={inputSx}
                        {...register("name", {
                          required: t("contact.form.errors.nameRequired"),
                          minLength: {
                            value: 2,
                            message: t("contact.form.errors.nameLength"),
                          },
                        })}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label={t("contact.form.email")}
                        variant="standard"
                        fullWidth
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={inputSx}
                        {...register("email", {
                          required: t("contact.form.errors.emailRequired"),
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t("contact.form.errors.emailValid"),
                          },
                        })}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label={t("contact.form.subject")}
                        variant="standard"
                        fullWidth
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                        sx={inputSx}
                        {...register("subject", {
                          required: t("contact.form.errors.subjectRequired"),
                        })}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        label={t("contact.form.message")}
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
                          required: t("contact.form.errors.messageRequired"),
                          minLength: {
                            value: 20,
                            message: t("contact.form.errors.messageLength"),
                          },
                        })}
                      />
                    </Grid>
                    <Grid size={12}>
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
                          transform: "translateY(0)",
                          boxShadow: "0 0 0 rgba(0,0,0,0)",
                          "&:hover": {
                            backgroundColor: "#6063ee",
                            boxShadow: "0 14px 28px rgba(163,166,255,0.22)",
                            transform: "translateY(-1px)",
                          },
                          "&:active": {
                            transform: "translateY(0)",
                            boxShadow: "0 8px 16px rgba(163,166,255,0.14)",
                          },
                          "&:focus-visible": {
                            outline: "2px solid var(--app-input-border-focus)",
                            outlineOffset: 3,
                          },
                          "&:disabled": {
                            backgroundColor: "rgba(163,166,255,0.3)",
                            color: "rgba(15,0,164,0.5)",
                          },
                          transition:
                            "transform 0.22s ease, background-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease",
                        }}
                      >
                        {submitting
                          ? t("contact.form.sending")
                          : t("contact.form.submit")}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </AppCard>
          </Grid>
        </Grid>
      </Box>

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
            backgroundColor: "var(--app-snackbar-bg)",
            color: "var(--app-text)",
            border: "1px solid var(--app-border-strong)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageSection>
  );
}
