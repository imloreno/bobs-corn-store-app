export const COOKIE_NAMES = {
  SESSION: "session",
} as const;

// Get a cookie value by name from document.cookie (client-side only)
export const getCookieClient = (name: string): string | null => {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};
