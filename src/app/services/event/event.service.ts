import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../message/message.service';

import { Event } from '../../models/event';
import { Message } from '../../models/message';
import { Type } from '../../models/message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'api/events';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
    .pipe(
      catchError(this.handleError('getEvents', []))
    );
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event, httpOptions).pipe(
      catchError(this.handleError<Event>('addEvent'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteEvent (event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.eventsUrl}/${id}`;

    return this.http.delete<Event>(url, httpOptions).pipe(
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      const text = `${operation} failed: ${error.message}`;
      this.log(new Message(Type.danger, text));

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: Message) {
    this.messageService.add(message);
  }
}
