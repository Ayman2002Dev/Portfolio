import en from "../../messages/en.json";
import ar from "../../messages/ar.json";

export const MESSAGES = {
  en,
  ar,
};

function interpolateMessage(message, variables) {
  if (!variables || typeof message !== "string") {
    return message;
  }

  return Object.entries(variables).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    message,
  );
}

export function getMessage(messages, path, fallback = "", variables) {
  const message = path.split(".").reduce((acc, key) => acc?.[key], messages);

  if (message === undefined || message === null) {
    return fallback;
  }

  return interpolateMessage(message, variables);
}
