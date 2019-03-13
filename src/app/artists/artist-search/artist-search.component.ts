import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Artist } from '../../models/artist';
import { SongkickService } from '../../services/songkick/songkick.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  artists$: Observable<Artist[]>;
  private searchTerms = new Subject<string>();

  constructor(private songkickService: SongkickService) { }

  ngOnInit() {
    this.artists$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.songkickService.searchArtist(term))
    );
  }

  searchArtists(term: string): void {
    this.searchTerms.next(term);
  }
}
