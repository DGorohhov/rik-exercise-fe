import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {ErrorService} from './error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly errorService: ErrorService
  ) {
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // @ts-ignore
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const parsedError = this.errorService.defineRawErrorType(error);
        this.errorService.throwError(parsedError);

        return throwError(() => error);
      })
    ) as Observable<HttpEvent<unknown>>;
  }

}
