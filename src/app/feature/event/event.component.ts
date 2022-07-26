import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Router} from '@angular/router';

import {EventDto} from '../../core/model/event-dto.model';

import {EventService} from '../../core/service/event.service';
import {PopupService} from '../../core/service/popup.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  public newEvent = {} as EventDto;

  public showSpinners = true;
  public showSeconds = false;
  public touchUi = true;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public minDate = new Date();
  public color: ThemePalette = 'primary';

  constructor(
    private readonly eventService: EventService,
    private readonly popupService: PopupService,
    private readonly router: Router,
  ) {}

  public createEvent(dto: EventDto): void {
    this.eventService.createEvent(dto).subscribe((e) => {
      this.router.navigate(['/']);
      this.popupService.throwSuccessPopup('Üritus lisatud!');
    })
  }

}
