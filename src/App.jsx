import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import theme from "./theme";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <HomePage />
        <ResumePage />
        <WorkPage />
        <ContactPage />
      </Layout>
    </ThemeProvider>
  );
}
