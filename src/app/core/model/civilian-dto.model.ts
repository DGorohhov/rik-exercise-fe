import {BaseParticipantDto} from './base-participant-dto.model';

export interface CivilianDto extends BaseParticipantDto {
  firstName: string;
  lastName: string;
  personalIdentityNumber: string;
}
