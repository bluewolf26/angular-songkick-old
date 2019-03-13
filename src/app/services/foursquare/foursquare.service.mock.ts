// import libs
import { Observable, of } from 'rxjs';

// import models
import { Venue } from '../../models/venue';

export class MockFoursquareService {
  searchVenues(term: string, city?: string): Observable<Venue[]> {
    return of([]);
  }
}
