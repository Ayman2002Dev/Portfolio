import { createContext, useContext } from "react";

export const MessagesContext = createContext(null);

export function useTranslations() {
  const context = useContext(MessagesContext);

  if (!context) {
    throw new Error("useTranslations must be used within AppProviders");
  }

  return context;
}
