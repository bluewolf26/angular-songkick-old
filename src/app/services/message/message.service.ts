import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messStream = new Subject<Message>();
  messages: Array<Message> = [];

  add(message: Message) {
    this.messStream.next(message);
  }
}
