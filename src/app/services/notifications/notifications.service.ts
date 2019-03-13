import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private socket: Socket) { }

  getNotifications() {
    return this.socket
        .fromEvent('notifications');
  }
}
