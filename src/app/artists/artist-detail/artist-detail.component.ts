import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../../models/event';
import { Message } from '../../models/message';
import { Type } from '../../models/message';

import { SongkickService } from '../../services/songkick/songkick.service';
import { EventService } from '../../services/event/event.service';
import { MessageService } from '../../services/message/message.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  events: Event[];
  loading = true;

  constructor(
    private songkickService: SongkickService,
    private eventService: EventService,
    private messageService: MessageService,
    private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ngxService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    /*setTimeout(() => {
      this.ngxService.stopLoader('loader-01'); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);*/
    const id = +this.route.snapshot.paramMap.get('id');
    this.songkickService.getEvents(id).subscribe(events => {
      this.events = events;
      this.ngxService.stopLoader('loader-01');
      this.loading = false;
    });
  }

  addEventFavorite(event: Event): void {
    this.eventService.addEvent(event).subscribe(res => {
      this.messageService.add(new Message(Type.success, 'Event added to favorites successfully'));
    });
  }
}
