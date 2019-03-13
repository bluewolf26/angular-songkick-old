import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// component imports
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';


import { ArtistsRoutingModule } from './artists-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    SharedModule
  ],
  declarations: [
    ArtistSearchComponent,
    ArtistDetailComponent
  ]
})
export class ArtistsModule { }
