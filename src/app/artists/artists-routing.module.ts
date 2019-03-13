// module imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component imports
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

const routes: Routes = [
  { path: 'artists/search', component: ArtistSearchComponent },
  { path: 'artists/:id', component: ArtistDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
