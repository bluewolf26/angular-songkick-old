import { Artist } from './artist';
import { Venue } from './venue';

export class Event {

  constructor(public id: number, public name: string,
    public type: string, public venue: Venue, public date: Date,
    public artist: Artist) { }
}
