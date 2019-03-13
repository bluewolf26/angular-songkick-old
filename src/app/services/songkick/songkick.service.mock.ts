// import libs
import { Observable, of } from 'rxjs';

// import models
import { Artist } from '../../models/artist';
import { Event } from '../../models/event';

export class MockSongkickService {
  searchArtist(term: string): Observable<Artist[]> {
    return of([]);
  }

  getEvents(id: number): Observable<Event[]> {
    return of([]);
  }
}
