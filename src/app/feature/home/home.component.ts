import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';

import {EventPreviewVm} from '../../core/model/event-preview-vm.model';
import {EventListService} from '../../core/service/event-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public events = new Observable<EventPreviewVm[]>();
  public endedEvents = new Observable<EventPreviewVm[]>();

  public upcomingEventsTitle = 'Tulevased üritused'; // FIXME: MOVE TO CONSTANTS???
  public endedEventsTitle = 'Toimunud üritused';

  constructor(
    private readonly eventListService: EventListService
  ) { }

  public ngOnInit(): void {
    this.fetchAllEvents()
  }

  public fetchEventsEvent(): void {
    this.fetchAllEvents();
  }

  private fetchAllEvents(): void {
    this.events = this.eventListService.upcomingEvents()
      .pipe(
        map(e => e.items)
      );

    this.endedEvents = this.eventListService.endedEvents()
      .pipe(
        map(e => e.items)
      );
  }

}
