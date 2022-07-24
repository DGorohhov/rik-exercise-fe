import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

import {EventDto} from '../../core/model/event-dto.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public newEvent = {} as EventDto;

  public showSpinners = true;
  public showSeconds = false;
  public touchUi = true;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
