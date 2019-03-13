// lib imports
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// class imports
import { Venue } from '../../models/venue';
import { Message } from '../../models/message';
import { Type } from '../../models/message';

// service imports
import { MessageService } from '../message/message.service';

const CLIENT_ID = '5KHMUS3MYSFC3KYQR4H133FYJEGGO54YTYURWWA0XXRO0BN4';
const CLIENT_SECRET = 'GS1LJGI5W3LNWSUBS5YEVSLVTCSWZ1ZNIIH1RX04GHZS2LIA';

@Injectable({
  providedIn: 'root'
})
export class FoursquareService {
  // attributes
  private urlVenue = 'https://api.foursquare.com/v2/venues/search';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  searchVenues(term: string, city?: string): Observable<Venue[]> {
    if (!term.trim()) {
      return of([]);
    } else {
      city = typeof city === 'string' ? city : 'Paris';
      const params = new HttpParams().set('client_id', CLIENT_ID)
                                    .set('client_secret', CLIENT_SECRET)
                                    .set('near', city)
                                    .set('v', '20190101')
                                    .set('query', term)
                                    .set('limit', '10')
                                    .set('categoryId', '4bf58dd8d48988d18e941735,' +
                                    '5032792091d4c4b30a586d5c,' +
                                    '4bf58dd8d48988d1e5931735');
      return this.http.get<Venue[]>(this.urlVenue, {params: params})
        .pipe(
          map(res => {
            return res['response'].venues.map( item => {
              return new Venue(item.id, item.name, item.location.city,
                                item.location.country, item.location.lat,
                                item.location.lng);
            });
          }),
          catchError(this.handleError('getVenue', []))
        );
    }
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
