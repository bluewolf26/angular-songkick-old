// lib imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// class imports
import { Event } from '../../models/event';
import { Artist } from '../../models/artist';
import { Venue } from '../../models/venue';

// service imports
import { FoursquareService } from '../../services/foursquare/foursquare.service';
import { SongkickService } from '../../services/songkick/songkick.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  @Output() addEv = new EventEmitter<Event>();
  @Output() closeEv = new EventEmitter();

  // attributes for autocomplete
  venues$: Observable<Venue[]>;
  private searchTerms = new Subject<string>();
  public showAutoCompVenue = false;
  public showVenuedetails = false;

  // attributes for spinner onSubmit form
  public showSpinner = false;

  private eventForm = this.fb.group({
    name: ['Banda Black Rio at New Morning (February 20, 2019)', Validators.required],
    type: ['Concert', Validators.required],
    date: [null, Validators.required],
    venue: this.fb.group({
      name: ['', Validators.required],
      city: ['Paris', Validators.required],
      country: ['France', Validators.required],
      lat: [''],
      lng: ['']
    }),
    artist: this.fb.group({
      name: ['Banda Black Rio', Validators.required]
    }),
  });

  constructor(private fb: FormBuilder,
              private foursquareService: FoursquareService,
              private songkickService: SongkickService) { }

  ngOnInit() {
    this.venues$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.foursquareService.searchVenues(term))
    );
  }

  searchVenues(term: string): void {
    this.searchTerms.next(term);
    this.showAutoCompVenue = true;
  }

  selectVenue(venue: Venue): void {
    this.showAutoCompVenue = false;
    this.showVenuedetails = true;
    this.eventForm.controls.venue['controls'].name.setValue(venue.name);
    this.eventForm.controls.venue['controls'].city.setValue(venue.city);
    this.eventForm.controls.venue['controls'].country.setValue(venue.country);
    this.eventForm.controls.venue['controls'].lat.setValue(+venue.lat);
    this.eventForm.controls.venue['controls'].lng.setValue(+venue.lng);
  }

  emptyVenueForm(): void {
    this.showVenuedetails = false;
    this.eventForm.controls.venue['controls'].city.setValue('');
    this.eventForm.controls.venue['controls'].country.setValue('');
    this.eventForm.controls.venue['controls'].lat.setValue('');
    this.eventForm.controls.venue['controls'].lng.setValue('');
  }

  // convenience getter for easy access to form fields
  get event() {
    return this.eventForm.controls;
  }

  get venue() {
    return this.eventForm.controls.venue['controls'];
  }

  get artist() {
    return this.eventForm.controls.artist['controls'];
  }

  onSubmit() {
    let eventNameValid = false;
    let artistNameValid = false;
    let venueNameValid = false;
    this.showSpinner = true;

    this.songkickService.searchArtist(this.eventForm.controls.
      artist['controls'].name.value)
      .pipe(
        mergeMap(artists => {
          let idArt;
          for (const artist of artists) {
            if (artist.name === this.eventForm.controls.artist['controls'].name.value) {
              artistNameValid = true;
              idArt = artist.id;
            }
          }
          return this.songkickService.getEvents(idArt);
        })
      ).subscribe(events => {
        for (const event of events) {
          if (event.name === this.eventForm.controls.name.value) {
            eventNameValid = true;
            if (event.venue.name === this.eventForm.controls.venue['controls'].name.value) {
              venueNameValid = true;
            }
          }
        }
        if (!eventNameValid) {
          this.eventForm.controls.name.setErrors({'notExisting': true});
          this.eventForm.controls.name.markAsTouched();
        }
        if (!artistNameValid) {
          this.eventForm.controls.artist['controls'].name.setErrors({'notExisting': true});
          this.eventForm.controls.artist['controls'].name.markAsTouched();
        }
        if (!venueNameValid) {
          this.eventForm.controls.venue['controls'].name.setErrors({'notExisting': true});
          this.eventForm.controls.venue['controls'].name.markAsTouched();
        }
        if (this.eventForm.valid) {
          const venue = new Venue(133333,
                                  this.eventForm.controls.venue['controls'].name.value,
                                  this.eventForm.controls.venue['controls'].city.value,
                                  this.eventForm.controls.venue['controls'].country.value,
                                  48.87321,
                                  2.35325);
              const artist = new Artist(223321, this.eventForm.controls.artist['controls'].name.value);
              const date = new Date(this.eventForm.controls.date.value.year,
                                    this.eventForm.controls.date.value.month - 1,
                                    this.eventForm.controls.date.value.day);
              console.log(this.eventForm.controls.date.value);
              const event = new Event(1112323,
                                      this.eventForm.controls.name.value,
                                      this.eventForm.controls.type.value,
                                      venue,
                                      date,
                                      artist
                                    );
              this.addEv.emit(event);
        } else {
          this.showSpinner = false;
        }
      });
  }

  closeAddEventForm() {
    this.showVenuedetails = false;
    this.eventForm.reset();
    this.closeEv.emit();
  }

}
