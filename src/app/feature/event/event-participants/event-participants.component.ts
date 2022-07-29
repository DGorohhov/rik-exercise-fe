import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {filter, map, switchMap} from 'rxjs';

import {CivilianService} from '../../../core/service/civilian.service';
import {CompanyService} from '../../../core/service/company.service';
import {EventService} from '../../../core/service/event.service';
import {PopupService} from '../../../core/service/popup.service';

import {CivilianDto} from '../../../core/model/civilian-dto.model';
import {CompanyDto} from '../../../core/model/company-dto.model';
import {EventParticipantDto} from '../../../core/model/event-participant-dto.model';
import {EventVm} from '../../../core/model/event-vm.model';

import {InputValidationConstant} from '../../../core/constant/input-validation-constant';
import {ParticipantType} from '../../../core/constant/participant-type-constant';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent {

  public event = {} as EventVm;
  public isFormValid = false;
  public participantType = '';
  public newCompany = {} as CompanyDto;
  public newCivilian = {} as CivilianDto;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
    private readonly popupService: PopupService,
    private readonly companyService: CompanyService,
    private readonly civilianService: CivilianService,
  ) {
    this.initRoute();
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

  public updateParticipantType(type: string): void {
    this.participantType = type;
  }

  public createParticipant(): void {
    if (this.participantType === ParticipantType.CIVILIAN) {
      this.createCivilian(this.newCivilian);
    } else if (this.participantType === ParticipantType.COMPANY) {
      this.createCompany(this.newCompany);
    }
  }

  public removeParticipant(type: string, extId: string): void {
    this.eventService.removeParticipant(this.event.extId, {id: extId, type: type} as EventParticipantDto)
      .subscribe((e) => {
        this.event = e;
        this.popupService.throwSuccessPopup(`${type === ParticipantType.CIVILIAN ? 'Eraisik' : 'Ettevõte'} kustutatud!`);
      })
  }

  private initRoute(): void {
    this.route.params
      .pipe(
        filter((params) => !!params.eventId),
        filter((params) => InputValidationConstant.UUID_REGEXP.test(params.eventId)),
        map((params) => params.eventId)
      ).subscribe((id) => this.fetchEventById(id));
  }

  private fetchEventById(eventId: string): void {
    this.eventService.getEventInfoById(eventId)
      .subscribe((e) => this.event = e);
  }

  private createCivilian(dto: CivilianDto): void {
    this.civilianService.createCivilian(dto)
      .pipe(
        switchMap((c) => this.eventService.addParticipant(
          this.event.extId, {id: c.extId, type: this.participantType} as EventParticipantDto)
        )
      )
      .subscribe((e) => {
        this.event = e;
        this.popupService.throwSuccessPopup('Eraisik salvestatud!');
      });
  }

  private createCompany(dto: CompanyDto): void {
    this.companyService.createCompany(dto)
      .pipe(
        switchMap((c) => this.eventService.addParticipant(
          this.event.extId, {id: c.extId, type: this.participantType} as EventParticipantDto)
        )
      )
      .subscribe((e) => {
        this.event = e;
        this.popupService.throwSuccessPopup('Ettevõte salvestatud!');
      });
  }

}
