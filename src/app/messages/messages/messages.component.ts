import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message/message.service';
import { NotificationsService } from '../../services/notifications/notifications.service';

import { Message } from '../../models/message';
import { Type } from '../../models/message';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = Array<Message>();

  constructor(
    public messageService: MessageService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.notificationsService.getNotifications().subscribe(res => {
      this.messages.push(new Message(Type.info, <string> res));
    });
    this.messageService.messStream.subscribe(res => {
      this.messages.push(res);
    });
  }

  closeMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

}
