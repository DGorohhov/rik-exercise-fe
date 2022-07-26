import {HttpErrorResponse} from '@angular/common/http';

import {HttpAppError} from './http-app-error.model';

export class BadInput extends HttpAppError {
  constructor(e: HttpErrorResponse) {
    super(e);
    this.errorMessage = 'Sisestatud andmed on valed';
  }
}
