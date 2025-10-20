import { NextRequest, NextResponse } from "next/server";

// Cookie configuration constants
export const COOKIE_NAMES = {
  SESSION: "session",
} as const;

export const COOKIE_OPTIONS = {
  httpOnly: true,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days
} as const;

// Get a cookie value from NextRequest
export const getCookieServer = (
  request: NextRequest,
  name: string
): string | undefined => {
  return request.cookies.get(name)?.value;
};

// Set a cookie on NextResponse
export const setCookieServer = (
  response: NextResponse,
  name: string,
  value: string,
  options = COOKIE_OPTIONS
): void => {
  response.cookies.set(name, value, options);
};

// Delete a cookie from NextResponse
export const deleteCookieServer = (
  response: NextResponse,
  name: string
): void => {
  response.cookies.delete(name);
};

// Encode user ID to base64 for session cookie
export const encodeSessionValue = (userId: string): string => {
  return Buffer.from(userId).toString("base64");
};

// Decode session cookie value to get user ID
export const decodeSessionValue = (sessionValue?: string): string | null => {
  if (!sessionValue) return null;

  try {
    return Buffer.from(sessionValue, "base64").toString("utf-8");
  } catch (error) {
    console.error("Failed to decode session value:", error);
    return null;
  }
};

// Get session cookie value from request
export const getSessionCookie = (request: NextRequest): string | undefined => {
  return getCookieServer(request, COOKIE_NAMES.SESSION);
};

// Set session cookie on response
export const setSessionCookie = (
  response: NextResponse,
  userId: string
): void => {
  const encodedValue = encodeSessionValue(userId);
  setCookieServer(response, COOKIE_NAMES.SESSION, encodedValue);
  console.log("Session cookie set for user:", userId);
};

// Delete session cookie from response
export const deleteSessionCookie = (response: NextResponse): void => {
  deleteCookieServer(response, COOKIE_NAMES.SESSION);
  console.log("Session cookie deleted");
};
