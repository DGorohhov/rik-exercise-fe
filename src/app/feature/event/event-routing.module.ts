import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventParticipantsComponent} from './event-participants/event-participants.component';

import {EventComponent} from './event.component';

const routes: Routes = [
  {
    path: 'new',
    component: EventComponent,
  },
  {
    path: ':eventId',
    component: EventParticipantsComponent
  },
  {
    path: '',
    redirectTo: '/event/new',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
