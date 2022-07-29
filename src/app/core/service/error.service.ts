import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';

import {PopupService} from './popup.service';

import {AppError} from '../model/app-error.model';
import {BadInput} from '../model/bad-input.model';
import {HttpAppError} from '../model/http-app-error.model';
import {NotFoundError} from '../model/not-found-error.model';


@Injectable()
export class ErrorService {

  constructor(
    private readonly popupService: PopupService,
  ) {
  }

  public handleRawError(error: HttpErrorResponse, silent = false): Observable<never> {
    if (error instanceof AppError) {
      error.silent = silent;

      return throwError(() => error);
    }
    let appError: AppError = new HttpAppError(error);
    switch (error.status) {
      case 400:
        appError = new BadInput(error);
        break;
      case 404:
        appError = new NotFoundError(error);
        break;
    }
    appError.silent = silent;

    return throwError(() => appError);
  }

  public defineRawErrorType(error: HttpErrorResponse): AppError {
    switch (error.status) {
      case 400:
        return new BadInput(error)
      case 404:
        return new NotFoundError(error)
      default:
        return new AppError();
    }
  }

  public throwError(error: AppError): void {
    const errorMessage = error.error.error ? error.error.error : '';
    const description = error.error.exceptionData ? error.error.exceptionData : '';

    switch (error.constructor) {
      case BadInput: {
        this.popupService.throwErrorPopup(`400: VALE ANDMED. ${description}`, '');
        break;
      }
      case NotFoundError: {
        this.popupService.throwErrorPopup(`404: ANDMED PUUDUVAD. ${description}`, '');
        break;
      }
    }
  }


}
