export const LOCALES = ["en", "ar"];
export const DEFAULT_LOCALE = "en";

export function isLocale(value) {
  return LOCALES.includes(value);
}

export function normalizeLocale(value) {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getLocaleFromPathname(pathname = "") {
  const [, firstSegment] = pathname.split("/");

  return normalizeLocale(firstSegment);
}

export function stripLocalePrefix(pathname = "") {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments.shift();
  }

  return `/${segments.join("/")}`.replace(/\/+$/, "") || "/";
}

export function buildLocalizedPath(locale, pathname = "/", hash = "") {
  const normalizedLocale = normalizeLocale(locale);
  const basePath = stripLocalePrefix(pathname);
  const suffix = basePath === "/" ? "" : basePath;

  return `/${normalizedLocale}${suffix}${hash}`;
}
