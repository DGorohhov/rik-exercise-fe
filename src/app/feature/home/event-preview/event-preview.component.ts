import {Component, Input} from '@angular/core';

import {EventPreviewVm} from '../../../core/model/event-preview-vm.model';

@Component({
  selector: 'rik-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent {

  @Input() events = [] as EventPreviewVm[];
  @Input() isEndedEvents = false;
  @Input() titleText = '';

  constructor() { }

}
