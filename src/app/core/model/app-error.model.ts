import {ApiError} from './api-error.model';

export class AppError {
  public silent?: boolean;
  public error: ApiError = {};
  public errorMessage = 'VIGA';
}
