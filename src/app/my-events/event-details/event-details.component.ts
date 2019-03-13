import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Output() closeEv = new EventEmitter();
  @Input() event: Event;
  @Input() showDet: boolean;

  constructor() { }

  ngOnInit() {
  }

  closeEvent() {
    this.closeEv.emit();
  }
}
