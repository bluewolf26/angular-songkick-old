import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from '../../models/event';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      {
        id: 11,
        name: 'Banda Black Rio at New Morning (February 24, 2019)',
        type: 'Concert',
        venue: {
          id: 20868,
          name: 'New Morning',
          city: 'Paris',
          country: 'France',
          lat: 48.87321,
          lng: 2.35325,
        },
        date: '2019-02-24T20:30:00+0100',
        artist: {
          id: 266751,
          name: 'Banda Black Rio'
        }
      },
      {
        id: 12,
        name: 'Banda Black Rio at Olympia (February 20, 2019)',
        type: 'Concert',
        venue: {
          id: 35050,
          name: 'L\'Olympia',
          city: 'Paris',
          country: 'France',
          lat: 48.87007,
          lng: 2.32776,
        },
        date: '2019-02-20T20:30:00+0100',

        artist: {
          id: 266751,
          name: 'Banda Black Rio'
        }
      },
      {
        date: '2019-06-13T17:30:00+0100',
        id: 13,
        name: 'Toto at Royal Hospital Chelsea (June 13, 2019)',
        type: 'Concert',
        venue: {
          id: 2278019,
          name: 'Royal Hospital Chelsea',
          city: 'London',
          country: 'UK',
          lat: 51.4866,
          lng: -0.16041,
        },
        artist: {
          id: 46215,
          name: 'Toto'
        },
      },
      {
        date: '2019-05-21T20:30:00+0200',
        id: 14,
        name: 'Butcher Brown at New Morning (May 21, 2019)',
        type: 'Concert',
        venue: {
          id: 20868,
          name: 'New Morning',
          city: 'Paris',
          country: 'France',
          lat: 48.87321,
          lng: 2.35325,
        },
        artist: {
          id: 5589868,
          name: 'Butcher Brown'
        },
      },
    ];
    return {events};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(events: Event[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
  }
}
