import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import {EventRoutingModule} from './event-routing.module';
import {EventParticipantsComponent} from './event-participants/event-participants.component';


@NgModule({
  declarations: [
    EventParticipantsComponent,
  ],
  imports: [
    SharedModule,
    EventRoutingModule
  ]
})
export class EventModule { }
