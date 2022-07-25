import {Component, OnInit} from '@angular/core';

import {CivilianDto} from '../../../core/model/civilian-dto.model';
import {CompanyDto} from '../../../core/model/company-dto.model';
import {EventParticipantPreviewVm} from '../../../core/model/event-participant-preview-vm.model';
import {EventVm} from '../../../core/model/event-vm.model';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent implements OnInit {

  public event = {
    extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
    name: 'Fusce ex dulm finibus eu luctus vel',
    date: new Date(),
    location: 'Condimectum a nunc',
    participants: [
      {
        extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
        name: 'Mihkel Amman',
        type: 'CIVILIAN',
        personalIdentificationNumber: '12345678901'
      } as EventParticipantPreviewVm,
      {
        extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
        name: 'Nullam OÜ',
        type: 'COMPANY',
        personalIdentificationNumber: '12345678'
      } as EventParticipantPreviewVm,
      {
        extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
        name: 'Uku Leele',
        type: 'CIVILIAN',
        personalIdentificationNumber: '12345678901'
      } as EventParticipantPreviewVm
    ]
  } as EventVm;
  public isFormValid = false;
  public newCompany = {} as CompanyDto;
  public newCivilian = {} as CivilianDto;

  constructor() {
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

}
