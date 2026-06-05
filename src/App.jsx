import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
const ContactPage = lazy(() => import("./pages/ContactPage"));

const ResumePage = lazy(() => import("./pages/ResumePage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));

function SectionFallback() {
  return (
    <Box
      sx={{
        minHeight: "24rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={28} />
    </Box>
  );
}

export default function App() {
  return (
    <Layout>
      <HomePage />
      <Suspense fallback={<SectionFallback />}>
        <ResumePage />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WorkPage />
      </Suspense>
      <ContactPage />
    </Layout>
  );
}
