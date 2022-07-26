import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {catchError, Observable} from 'rxjs';

import {CivilianDto} from '../model/civilian-dto.model';

import {environment} from '../../../environments/environment';

import {ErrorService} from './error.service';

@Injectable()
export class CivilianService {

  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrorService,
  ) {
  }

  public getCivilianById(extId: string): Observable<CivilianDto> {
    const requestUrl = `${environment.participants.baseService}${environment.participants.civilian.service}/${extId}`;

    return this.http.get<CivilianDto>(requestUrl)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public createCivilian(dto: CivilianDto): Observable<CivilianDto> {
    const requestUrl = `${environment.participants.baseService}${environment.participants.civilian.service}`;

    return this.http.post<CivilianDto>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public updateCivilian(dto: CivilianDto): Observable<CivilianDto> {
    const requestUrl = `${environment.participants.baseService}${environment.participants.civilian.service}`;

    return this.http.put<CivilianDto>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

}
