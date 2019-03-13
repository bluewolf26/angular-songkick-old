// import libs
import { Observable, of } from 'rxjs';

// import models
import { Event } from '../../models/event';

export class MockEventService {
  getEvents(): Observable<Event[]> {
    return of([]);
  }

  addEvent(event: Event): Observable<Event> {
    return of();
  }

  /** DELETE: delete the hero from the server */
  deleteEvent (event: Event | number): Observable<Event> {
    return of();
  }
}
