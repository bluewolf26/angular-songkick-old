import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../models/event';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Output() showEvEmmiter = new EventEmitter<Event>();
  @Output() delEvEmmiter = new EventEmitter<Event>();
  @Output() showAddEvFormEmmiter = new EventEmitter();
  @Input() events: Array<Event>;
  private eventsBeenDel = [];

  constructor() { }

  ngOnInit() {
  }

  selectEvent(eventSelected: Event): void {
    this.showEvEmmiter.emit(eventSelected);
  }

  deleteEvent(eventSelected: Event): void {
    this.eventsBeenDel.push(eventSelected.id);
    this.delEvEmmiter.emit(eventSelected);
  }

  addEvent(): void {
    this.showAddEvFormEmmiter.emit();
  }

  eventIsbeenDeleted(id: number): boolean {
    if (this.eventsBeenDel.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
}
