import {HttpErrorResponse} from '@angular/common/http';

import {AppError} from './app-error.model';

export class HttpAppError extends AppError {
  constructor(public originalError: HttpErrorResponse) {
    super();
    this.error = Object.assign({}, originalError ? originalError.error : null);
  }
}
