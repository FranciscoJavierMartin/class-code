import type { EventHandlerRequest, H3Error, H3Event } from 'h3';

export const ErrorCode = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
} as const;

export type ErroCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];

export interface ErrorDetails {
  code: ErroCodeType;
  message: string;
  statusCode: number;
  details?: Record<string, unknown>;
  timestamp?: string;
}

export class ApiError extends Error {
  public readonly code: ErroCodeType;
  public readonly statusCode: number;
  public readonly details?: Record<string, unknown>;
  public readonly timestamp: string;

  constructor(params: ErrorDetails) {
    super(params.message);
    this.name = '[ApiError]';
    this.code = params.code;
    this.statusCode = params.statusCode;
    this.details = params.details;
    this.timestamp = params.timestamp || new Date().toISOString();
  }
}

export function handleError(
  event: H3Event<EventHandlerRequest> | undefined,
  error: unknown,
): H3Error {
  if (isError(error)) {
    return error;
  }

  if (error instanceof ApiError) {
    const isValidationError = error.code === ErrorCode.VALIDATION_ERROR;
    const errorObject = {
      statusCode: error.statusCode,
      statusMessage: error.message,
      data: {
        code: error.code,
        timestamp: error.timestamp,
        ...(isValidationError && error.details?.errors
          ? { errors: error.details.errors }
          : {}),
      },
    };

    logger.error(JSON.stringify(errorObject));

    return createError(errorObject);
  }

  const errorObject = {
    statusCode: 500,
    statusMessage: 'Internal server Error',
    data: {
      code: ErrorCode.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
    },
  };

  logger.error(JSON.stringify(errorObject));

  return createError(errorObject);
}

export const Errors = {
  validation: (message: string, details?: Record<string, unknown>) =>
    new ApiError({
      code: ErrorCode.VALIDATION_ERROR,
      statusCode: 422,
      message,
      details,
    }),
};
