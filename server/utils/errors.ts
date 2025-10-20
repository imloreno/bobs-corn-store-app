// Custom error class for rate limiting violations
export class RateLimitError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
    this.statusCode = 429;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RateLimitError);
    }
  }
}

/**
 * Type guard to check if an error is a RateLimitError
 */
export function isRateLimitError(error: unknown): error is RateLimitError {
  return error instanceof RateLimitError;
}
