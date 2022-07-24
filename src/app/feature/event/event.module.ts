import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import { EventRoutingModule } from './event-routing.module';
import { EventParticipantsComponent } from './event-participants/event-participants.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';


@NgModule({
  declarations: [
    EventParticipantsComponent,
    ParticipantFormComponent
  ],
  imports: [
    SharedModule,
    EventRoutingModule
  ]
})
export class EventModule { }
