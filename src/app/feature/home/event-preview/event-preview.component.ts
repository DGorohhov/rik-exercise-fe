import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';

import {EventService} from '../../../core/service/event.service';
import {PopupService} from '../../../core/service/popup.service';

import {EventPreviewVm} from '../../../core/model/event-preview-vm.model';

@Component({
  selector: 'rik-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent {

  @Input() events = new Observable<EventPreviewVm[]>();
  @Input() isEndedEvents = false;
  @Input() titleText = '';

  @Output() fetchEvents = new EventEmitter<void>();

  constructor(
    private readonly eventService: EventService,
    private readonly popupService: PopupService,
    private readonly router: Router,
  ) { }

  public deleteEvent(extId: string): void {
    this.eventService.deleteEvent(extId).subscribe((e) => {
      this.fetchEvents.emit();
      this.popupService.throwSuccessPopup('Üritus kustutatud!');
    })
  }

}
