import {BaseParticipantDto} from './base-participant-dto.model';

export interface CompanyDto extends BaseParticipantDto {
  legalName: string;
  registerCode: string;
  numberOfParticipants: number;
}
