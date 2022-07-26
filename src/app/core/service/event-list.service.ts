import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {catchError, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

import {ErrorService} from './error.service';

import {EventPreviewVm} from '../model/event-preview-vm.model';
import {PaginatedListResponse} from '../model/paginated-list-response.model';

@Injectable()
export class EventListService {

  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrorService,
  ) {
  }

  public upcomingEvents(): Observable<PaginatedListResponse<EventPreviewVm>> {
    const requestUrl = `${environment.event.service}${environment.event.upcomingUrl}`;

    const params = new HttpParams()
      .set('page', 0)
      .set('limit', 10);
    // const params = new HttpParams()
    //   .set('page', page.toString())
    //   .set('limit', limit.toString());

    return this.http.get<PaginatedListResponse<EventPreviewVm>>(requestUrl, {params})
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public endedEvents(): Observable<PaginatedListResponse<EventPreviewVm>> {
    const requestUrl = `${environment.event.service}${environment.event.endedUrl}`;

    const params = new HttpParams()
      .set('page', 0)
      .set('limit', 10);

    return this.http.get<PaginatedListResponse<EventPreviewVm>>(requestUrl, {params})
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

}
