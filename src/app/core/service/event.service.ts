import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {catchError, Observable} from 'rxjs';

import {EventDto} from '../model/event-dto.model';
import {EventParticipantDto} from '../model/event-participant-dto.model';
import {EventVm} from '../model/event-vm.model';

import {environment} from '../../../environments/environment';

import {ErrorService} from './error.service';

@Injectable()
export class EventService {

  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrorService,
  ) {
  }

  public getEventById(extId: string): Observable<EventDto> {
    const requestUrl = `${environment.event.service}/${extId}`;

    return this.http.get<EventDto>(requestUrl)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public getEventInfoById(extId: string): Observable<EventVm> {
    const requestUrl = `${environment.event.service}/${extId}/info`;

    return this.http.get<EventVm>(requestUrl)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public createEvent(dto: EventDto): Observable<EventDto> {
    const requestUrl = `${environment.event.service}`;

    return this.http.post<EventDto>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public addParticipant(eventId: string, dto: EventParticipantDto): Observable<EventVm> {
    const requestUrl = `${environment.event.service}/${eventId}`;

    return this.http.post<EventVm>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public updateEvent(dto: EventDto): Observable<EventDto> {
    const requestUrl = `${environment.event.service}`;

    return this.http.put<EventDto>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public deleteEvent(eventId: string): Observable<void> {
    const requestUrl = `${environment.event.service}/${eventId}`;

    return this.http.delete<void>(requestUrl)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public removeParticipant(eventId: string, dto: EventParticipantDto): Observable<EventVm> {
    const requestUrl = `${environment.event.service}/participants/${eventId}`;

    return this.http.request<EventVm>('delete', requestUrl, {body: dto})
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

}
