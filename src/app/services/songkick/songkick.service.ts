import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MessageService } from '../message/message.service';

import { SONGCKICKAPICONF } from './songkick-api-config';

import { Artist } from '../../models/artist';
import { Event } from '../../models/event';
import { Venue } from '../../models/venue';
import { Message } from '../../models/message';
import { Type } from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class SongkickService {
// attributes
  urlArtist = SONGCKICKAPICONF.urlSearchArtists;
  apiKey = SONGCKICKAPICONF.apiKey;
// functions
  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  searchArtist(term: string): Observable<Artist[]> {
    if (!term.trim()) {
      return of([]);
    } else {
      const httpOptions = {
        params: new HttpParams().set('query', `${term}`).set('apikey', `${this.apiKey}`)
      };
      return this.http.get<Artist[]>(`${this.urlArtist}`, httpOptions)
        .pipe(
          map(res => {
            if ( Object.entries(res['resultsPage'].results).length === 0 &&
                  res['resultsPage'].results.constructor === Object ) {
              return new Array<Artist>();
            } else {
              return res['resultsPage'].results.artist.map(item => {
                return new Artist(
                  item.id,
                  item.displayName
                );
              });
            }
          }),
          catchError(this.handleError('searchArtist', []))
        );
    }
  }

  getEvents(id: number): Observable<Event[]> {
    const urlEvents = SONGCKICKAPICONF.urlSearchEvents.replace('${id}', `${id}`);
    const httpOptions = {
      params: new HttpParams().set('apikey', `${this.apiKey}`)
    };
    return this.http.get<Event[]>(`${urlEvents}`, httpOptions)
      .pipe(
        map(res => {
          if ( Object.entries(res['resultsPage'].results).length === 0 &&
                res['resultsPage'].results.constructor === Object ) {
            return new Array<Event>();
          } else {
            return res['resultsPage'].results.event.map(item => {
              // get the right artist of the id (for festival instances)
              let eventArtist: Artist;
              for (const art of item.performance) {
                  if (art.artist.id === id) {
                    eventArtist = new Artist(art.artist.id, art.artist.displayName);
                    break;
                  }
              }

              // if festival take the start.date from date instead of start.datetime
              let eventDate: Date;
              if (item.type === 'Festival') {
                eventDate = new Date(item.start.date);
              } else {
                eventDate = new Date(item.start.datetime);
              }
              return new Event(
                item.id,
                item.displayName,
                item.type,
                new Venue(item.venue.id,
                  item.venue.displayName,
                  item.venue.metroArea.displayName,
                  item.venue.metroArea.country.displayName,
                  item.venue.lat, item.venue.lng
                ),
                eventDate,
                eventArtist
              );
            });
          }

        }),
        catchError(this.handleError('getEvents', []))
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
