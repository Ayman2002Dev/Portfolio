import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { buildAppTheme } from "../theme/createAppTheme";
import { LocaleContext, ThemeModeContext } from "./appState";
import { MessagesContext } from "./i18nState";
import { MESSAGES, getMessage } from "../i18n/messages";
import {
  buildLocalizedPath,
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  normalizeLocale,
} from "../i18n/locale";
import { THEME_CSS_VARS } from "../theme/paletteVars";

const THEME_STORAGE_KEY = "portfolio-theme-mode";
const LOCALE_STORAGE_KEY = "portfolio-locale";

function getStoredValue(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function AppProviders({ children }) {
  const [themeMode, setThemeMode] = useState(() =>
    getStoredValue(THEME_STORAGE_KEY, "dark"),
  );
  const [locale, setLocaleState] = useState(() => {
    const pathname =
      typeof window === "undefined" ? "" : window.location.pathname || "/";
    const pathLocale = getLocaleFromPathname(pathname);

    return normalizeLocale(
      pathLocale || getStoredValue(LOCALE_STORAGE_KEY, DEFAULT_LOCALE),
    );
  });
  const localeRef = useRef(locale);
  const pathnameRef = useRef(
    typeof window === "undefined" ? "/" : window.location.pathname || "/",
  );
  const hashRef = useRef(
    typeof window === "undefined" ? "" : window.location.hash || "",
  );

  const isRtl = locale === "ar";
  const theme = useMemo(
    () => buildAppTheme(themeMode, isRtl ? "rtl" : "ltr"),
    [themeMode, isRtl],
  );
  const emotionCache = useMemo(() => {
    const plugins = isRtl ? [prefixer, rtlPlugin] : [prefixer];

    return createCache({
      key: isRtl ? "muirtl" : "mui",
      stylisPlugins: plugins,
    });
  }, [isRtl]);
  const messages = useMemo(() => MESSAGES[locale] || MESSAGES.en, [locale]);
  const toggleTheme = useCallback(() => {
    setThemeMode((current) => (current === "dark" ? "light" : "dark"));
  }, []);
  const navigateToLocale = useCallback(
    (nextLocale) => {
      if (typeof window === "undefined") {
        return;
      }

      const normalizedLocale = normalizeLocale(nextLocale);
      const nextPath = buildLocalizedPath(
        normalizedLocale,
        window.location.pathname || "/",
        window.location.hash || "",
      );

      pathnameRef.current = window.location.pathname || "/";
      hashRef.current = window.location.hash || "";
      window.history.pushState({}, "", nextPath);
      setLocaleState(normalizedLocale);
    },
    [setLocaleState],
  );
  const setLocale = useCallback(
    (nextLocaleOrUpdater) => {
      const nextLocale =
        typeof nextLocaleOrUpdater === "function"
          ? nextLocaleOrUpdater(localeRef.current)
          : nextLocaleOrUpdater;

      navigateToLocale(normalizeLocale(nextLocale));
    },
    [navigateToLocale],
  );

  useEffect(() => {
    const root = document.documentElement;
    const isDark = themeMode === "dark";
    const themeVars = THEME_CSS_VARS[themeMode];

    root.dataset.theme = themeMode;
    root.style.colorScheme = themeMode;
    Object.entries(themeVars).forEach(([name, value]) => {
      root.style.setProperty(name, value);
    });

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", isDark ? "#060e20" : "#f5f7fb");
    }

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    } catch {
      // Ignore storage failures and keep the current session state.
    }
  }, [themeMode]);

  useEffect(() => {
    const root = document.documentElement;

    root.lang = locale;
    root.dir = isRtl ? "rtl" : "ltr";
    root.dataset.locale = locale;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage failures and keep the current session state.
    }
  }, [locale, isRtl]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const syncLocaleFromLocation = () => {
      const nextLocale = getLocaleFromPathname(window.location.pathname || "/");
      pathnameRef.current = window.location.pathname || "/";
      hashRef.current = window.location.hash || "";
      setLocaleState(nextLocale);
    };

    const currentPath = window.location.pathname || "/";
    const canonicalPath = buildLocalizedPath(
      locale,
      currentPath,
      window.location.hash || "",
    );

    if (window.location.pathname + window.location.hash !== canonicalPath) {
      window.history.replaceState({}, "", canonicalPath);
    }

    window.addEventListener("popstate", syncLocaleFromLocation);

    return () => window.removeEventListener("popstate", syncLocaleFromLocation);
  }, [locale]);

  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  const themeValue = useMemo(
    () => ({
      themeMode,
      setThemeMode,
      toggleTheme,
    }),
    [themeMode, toggleTheme],
  );

  const localeValue = useMemo(
    () => ({
      locale,
      setLocale,
      navigateToLocale,
      isRtl: locale === "ar",
    }),
    [locale, navigateToLocale, setLocale],
  );

  return (
    <ThemeModeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>
        <MessagesContext.Provider
          value={{
            locale,
            messages,
            t: (path, fallback = "", variables) =>
              getMessage(messages, path, fallback, variables),
          }}
        >
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </CacheProvider>
        </MessagesContext.Provider>
      </LocaleContext.Provider>
    </ThemeModeContext.Provider>
  );
}
