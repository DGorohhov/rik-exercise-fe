import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';

import {CivilianDto} from '../../core/model/civilian-dto.model';
import {CompanyDto} from '../../core/model/company-dto.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  public isFormValid = false;
  public newCompany = {} as CompanyDto;
  public newCivilian = {} as CivilianDto;
  public participantType = 'CIVILIAN'; // FIXME: take from route param
  public company = {
    extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
    legalName: 'Cool OY',
    numberOfParticipants: 5,
    paymentType: 'CASH',
    registerCode: '12345678'
  } as CompanyDto; // FIXME: find by route param extId
  public civilian = {
    extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
    firstName: 'Uku',
    lastName: 'Leele',
    paymentType: 'CASH',
    personalIdentityNumber: '12345678901'
  } as CivilianDto; // FIXME: find by route param extId

  constructor(
    private readonly location: Location,
  ) {
    console.log('hello!');
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

}
