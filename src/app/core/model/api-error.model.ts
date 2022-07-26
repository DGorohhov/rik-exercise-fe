export interface ApiError {
  status?: number;
  error?: string;
  exceptionData?: string;
  correlationId?: string;
}
