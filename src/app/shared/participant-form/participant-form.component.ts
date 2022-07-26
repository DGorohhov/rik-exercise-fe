import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {CivilianDto} from '../../core/model/civilian-dto.model';
import {CompanyDto} from '../../core/model/company-dto.model';
import {PaymentType} from '../../core/model/payment-type.model';

import {ParticipantType} from '../../core/constant/participant-type-constant';

@Component({
  selector: 'rik-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss']
})
export class ParticipantFormComponent implements AfterViewInit, OnDestroy {

  @ViewChild('participantForm', {static: true}) public participantForm!: NgForm;

  @Input() allowTypeSelection = true;
  @Input() participantType = ParticipantType.CIVILIAN;
  @Input() civilianData = {} as CivilianDto;
  @Input() companyData = {} as CompanyDto;

  @Output() isFormValid = new EventEmitter<boolean>();
  @Output() participantTypeOutput = new EventEmitter<string>();
  @Output() civilianDataOutput = new EventEmitter<CivilianDto>();
  @Output() companyDataOutput = new EventEmitter<CompanyDto>();

  public participantFormSubscription!: Subscription;
  public participantTypes = ParticipantType;

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

  constructor() { }

  public ngAfterViewInit(): void {
    // @ts-ignore
    this.participantFormSubscription = this.participantForm.valueChanges.subscribe((data) => {
      this.emitIsFormValid(this.participantForm.invalid ?? false);
      if (!this.participantForm.invalid) {
        this.emitParticipantType(this.participantType);
        if (this.participantType === 'CIVILIAN') {
          this.emitCivilianData({
            firstName: data.civilianFirstName,
            lastName: data.civilianLastName,
            paymentType: data. civilianPaymentType,
            personalIdentityNumber: data.civilianPersonalIdentityNumber,
            additionalInfo: data.civilianAdditionalInfo
          } as CivilianDto);
        } else {
          this.emitCompanyData({
            legalName: data.companyLegalName,
            registerCode: data.companyRegisterCode,
            numberOfParticipants: data.companyNumberOfParticipants,
            paymentType: data.companyPaymentType,
            additionalInfo: data.companyAdditionalInfo
          } as CompanyDto);
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

  private emitParticipantType(type: string): void {
    this.participantTypeOutput.emit(type);
  }

  public ngOnDestroy(): void {
    this.participantFormSubscription.unsubscribe();
  }

}
