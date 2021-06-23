import { Component, AfterViewChecked, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Tooltip from 'tooltip.js';
import * as moment from 'moment';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit, AfterViewChecked {
  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent;
  @ViewChild('event') event: ElementRef;
  calendarEvents: EventInput[] = [];
  calendarApi: Calendar;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  initialized = false;
  showPopup: boolean;
  date: Date;
  constructor() {

  }
  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.calendarApi = this.calendarComponent.getApi();

    if (this.calendarApi && !this.initialized) {
      this.initialized = true;
      this.loadEvents();
    }
  }

  loadEvents() {
    const event = {
      title: 'test',
      start: Date.now(),
      allDay: true
    };
    this.calendarEvents.push(event);
    this.calendarApi.removeAllEventSources();
    this.calendarApi.addEventSource(this.calendarEvents);
  }

  onDateClick(clickedDate: any) {
    debugger;
    this.showPopup = true;
    this.date = clickedDate.date
  }

  onEventClick(clickedEvent: any) {
    debugger;
    this.showPopup = true;
    console.log(clickedEvent);
  }

  onEventRender(info: any) {
    console.log('onEventRender', info.el);
    const tooltip = new Tooltip(info.el, {
      title: info.event.title,
      placement: 'top-end',
      trigger: 'hover',
      container: 'body'
    });
  }
  submit() {
    debugger;
    this.showPopup = false;
    const event = {
      title: this.event.nativeElement.value,
      start: this.date,
      allDay: true
    };
    this.calendarEvents.push(event);
    this.calendarApi.removeAllEventSources();
    this.calendarApi.addEventSource(this.calendarEvents);
  }
}
