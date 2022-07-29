import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {filter} from 'rxjs';
import {ParticipantType} from '../../core/constant/participant-type-constant';

import {CivilianService} from '../../core/service/civilian.service';
import {CompanyService} from '../../core/service/company.service';
import {PopupService} from '../../core/service/popup.service';

import {CivilianDto} from '../../core/model/civilian-dto.model';
import {CompanyDto} from '../../core/model/company-dto.model';

import {InputValidationConstant} from '../../core/constant/input-validation-constant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  public isFormValid = false;
  public newCompany = {} as CompanyDto;
  public newCivilian = {} as CivilianDto;
  public participantType = 'CIVILIAN';
  public company = {} as CompanyDto;
  public civilian = {} as CivilianDto;

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly popupService: PopupService,
    private readonly companyService: CompanyService,
    private readonly civilianService: CivilianService,
  ) {
    this.initRoute();
  }

  public ngOnInit(): void {
  }

  public updateFormValidityState(isValid: boolean): void {
    this.isFormValid = isValid;
  }

  public updateCivilianData(data: CivilianDto): void {
    this.newCivilian = data;
  }

  public updateCompanyData(data: CompanyDto): void {
    this.newCompany = data;
  }

  public goBackToEvent(): void {
    this.location.back();
  }

  public createParticipant(): void {
    if (this.participantType === ParticipantType.CIVILIAN) {
      this.newCivilian.extId = this.civilian.extId;
      this.newCivilian.extId ? this.updateCivilian(this.newCivilian) : this.saveCivilian(this.newCivilian);
    } else if (this.participantType === ParticipantType.COMPANY) {
      this.newCompany.extId = this.company.extId;
      this.newCompany.extId ? this.updateCompany(this.newCompany) : this.saveCompany(this.newCompany);
    }
  }

  private initRoute(): void {
    this.route.params
      .pipe(
        filter((params) => !!params.participantType),
        filter((params) => params.participantType === ParticipantType.CIVILIAN || params.participantType === ParticipantType.COMPANY),
        filter((params) => !!params.participantId),
        filter((params) => InputValidationConstant.UUID_REGEXP.test(params.participantId)),
      ).subscribe((params) => {
        this.participantType = params.participantType;
        params.participantType === ParticipantType.CIVILIAN ?
          this.fetchCivilianById(params.participantId) : this.fetchCompanyById(params.participantId);
    });
  }

  private saveCivilian(dto: CivilianDto): void {
    this.civilianService.createCivilian(dto)
      .subscribe(() => {
        this.popupService.throwSuccessPopup('Eraisik salvestatud!');
        this.goBackToEvent();
      });
  }

  private updateCivilian(dto: CivilianDto): void {
    this.civilianService.updateCivilian(dto)
      .subscribe(() => {
        this.popupService.throwSuccessPopup('Eraisik uuendatud!');
        this.goBackToEvent();
      });
  }

  private saveCompany(dto: CompanyDto): void {
    this.companyService.createCompany(dto)
      .subscribe(() => {
        this.popupService.throwSuccessPopup('Ettevõte salvestatud!');
        this.goBackToEvent();
      });
  }

  private updateCompany(dto: CompanyDto): void {
    this.companyService.updateCompany(dto)
      .subscribe(() => {
        this.popupService.throwSuccessPopup('Ettevõte uuendatud!');
        this.goBackToEvent();
      });
  }

  private fetchCivilianById(id: string): void {
    this.civilianService.getCivilianById(id)
      .subscribe((c) => this.civilian = c);
  }

  private fetchCompanyById(id: string): void {
    this.companyService.getCompanyById(id)
      .subscribe((c) => this.company = c);
  }

}
