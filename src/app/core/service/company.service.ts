import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {catchError, Observable} from 'rxjs';

import {CompanyDto} from '../model/company-dto.model';

import {environment} from '../../../environments/environment';

import {ErrorService} from './error.service';

@Injectable()
export class CompanyService {

  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrorService,
  ) {
  }

  public getCompanyById(extId: string): Observable<CompanyDto> {
    const requestUrl = `${environment.participants.baseService}${environment.participants.company.service}/${extId}`;

    return this.http.get<CompanyDto>(requestUrl)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public createCompany(dto: CompanyDto): Observable<CompanyDto> {
    const requestUrl = `${environment.participants.baseService}${environment.participants.company.service}`;

    return this.http.post<CompanyDto>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

  public updateCompany(dto: CompanyDto): Observable<CompanyDto> {
    const requestUrl = `${environment.participants.baseService}${environment.participants.company.service}`;

    return this.http.put<CompanyDto>(requestUrl, dto)
      .pipe(
        catchError((e) => this.errorService.handleRawError(e)),
      );
  }

}
