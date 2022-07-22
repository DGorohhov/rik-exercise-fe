import {Component, OnInit} from '@angular/core';

import {EventPreviewVm} from '../../core/model/event-preview-vm.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public events = [
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Aenean commodo',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Fusce ex dulm finibus eu luctus vel',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Nunc lobortis metus eu massa viverra ultri iplacerat nibh',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Integer nec nulla vitae',
      date: new Date()
    } as EventPreviewVm,
  ] as EventPreviewVm[];

  public endedEvents = [
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Aenean commodo',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Fusce ex dulm finibus eu luctus vel',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Nunc lobortis metus eu massa viverra ultri iplacerat nibh',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Integer nec nulla vitae',
      date: new Date()
    } as EventPreviewVm,
    {
      extId: '0449f445-ff87-40bd-8c2f-1c5b70dba8d9',
      name: 'Praesent molestie dapibus lorem',
      date: new Date()
    } as EventPreviewVm
  ] as EventPreviewVm[];

  public upcomingEventsTitle = 'Tulevased üritused'; // FIXME: MOVE TO CONSTANTS???
  public endedEventsTitle = 'Toimunud üritused';

  constructor() { }

  public ngOnInit(): void {
  }

}
