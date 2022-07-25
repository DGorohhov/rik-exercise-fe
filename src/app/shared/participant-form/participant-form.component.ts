import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {CivilianDto} from '../../core/model/civilian-dto.model';
import {CompanyDto} from '../../core/model/company-dto.model';
import {PaymentType} from '../../core/model/payment-type.model';

@Component({
  selector: 'rik-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss']
})
export class ParticipantFormComponent implements AfterViewInit, OnDestroy {

  @ViewChild('participantForm', {static: true}) public participantForm!: NgForm;

  @Input() allowTypeSelection = true;
  @Input() participantType = 'CIVILIAN';
  @Input() civilianData = {} as CivilianDto;
  @Input() companyData = {} as CompanyDto;

  @Output() isFormValid = new EventEmitter<boolean>();
  @Output() civilianDataOutput = new EventEmitter<CivilianDto>();
  @Output() companyDataOutput = new EventEmitter<CompanyDto>();

  public participantFormSubscription!: Subscription;

  public paymentTypes = [
    {
      key: 'CASH',
      value: 'Sularaha'
    } as PaymentType,
    {
      key: 'CARD',
      value: 'Kaart'
    } as PaymentType
  ];

  // TODO: listen to form isValid events with subscription and emit isFormValid output
  // TODO: emit civilian and company data at every form change when isValid == true
  constructor() { }

  public ngAfterViewInit(): void {
    // @ts-ignore
    this.participantFormSubscription = this.participantForm.valueChanges.subscribe((data) => {
      this.emitIsFormValid(this.participantForm.invalid ?? false);
      if (!this.participantForm.invalid) {
        if (this.participantType === 'CIVILIAN') {
          this.emitCivilianData(data);
        } else {
          this.emitCompanyData(data);
        }
      }
    })
  }

  private emitIsFormValid(isValid: boolean): void {
    this.isFormValid.emit(isValid);
  }

  private emitCivilianData(data: CivilianDto): void {
    this.civilianDataOutput.emit(data);
  }

  private emitCompanyData(data: CompanyDto): void {
    this.companyDataOutput.emit(data);
  }

  public ngOnDestroy(): void {
    this.participantFormSubscription.unsubscribe();
  }

}
