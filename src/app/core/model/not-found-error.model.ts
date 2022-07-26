import {HttpErrorResponse} from '@angular/common/http';
import {HttpAppError} from './http-app-error.model';

export class NotFoundError extends HttpAppError {
  constructor(e: HttpErrorResponse) {
    super(e);
    this.errorMessage = 'Ei saanud andmeid leida';
  }
}
