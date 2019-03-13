import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';
import { Message } from '../../models/message';
import { Type } from '../../models/message';

import { EventService } from '../../services/event/event.service';
import { MessageService } from '../../services/message/message.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

export enum EventComponent {
    EVENTS = 0,
    EVENT_ADD = 1,
    EVENT_DETAILS = 2,
}

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  public showComp: EventComponent;
  public events: Array<Event>;
  public selectedEvent: Event;

  constructor(private eventService: EventService,
              private ngxService: NgxUiLoaderService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.showComp = null;
    this.getEvents();
  }


/*------ functions that shows the components ------*/
  toggleAddEvFormComponent() {
    this.showComp = EventComponent.EVENT_ADD;
  }

  toggleEventsComponent() {
    this.showComp = EventComponent.EVENTS;
  }

  toggleEventDetailsComponent(event: Event) {
    this.selectedEvent = event;
    this.showComp = EventComponent.EVENT_DETAILS;
  }


/*------ functions that manipulate the data ------*/
  getEvents(): void {
    this.ngxService.startLoader('loader-01');
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.ngxService.stopLoader('loader-01');
      setTimeout(() => {
        this.showComp = EventComponent.EVENTS;
      }, 700);
    });
  }

  addEvent(event: Event): void {
    console.log(event);
    this.eventService.addEvent(event).subscribe(res => {
      this.showComp = EventComponent.EVENTS;
      this.events.push(event);
      this.messageService.add(new Message(Type.success, 'Event added successfully'));
    });
  }

  deleteEvent(event: Event): void {
    this.eventService.deleteEvent(event).subscribe(res => {
      this.events = this.events.filter(h => h !== event);
      this.messageService.add(new Message(Type.success, 'Event deleted successfully'));
    });
  }
}
