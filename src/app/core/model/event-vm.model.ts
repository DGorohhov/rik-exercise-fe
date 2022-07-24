import {EventDto} from './event-dto.model';
import {EventParticipantPreviewVm} from './event-participant-preview-vm.model';

export interface EventVm extends EventDto {
  participants: EventParticipantPreviewVm[];
}
