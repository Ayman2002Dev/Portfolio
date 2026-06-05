import { createContext, useContext } from "react";

export const ThemeModeContext = createContext(null);
export const LocaleContext = createContext(null);

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within AppProviders");
  }

  return context;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within AppProviders");
  }

  return context;
}
