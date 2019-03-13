import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyEventsComponent } from './my-events/my-events/my-events.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists/search', pathMatch: 'full' },
  { path: 'myEvents', component: MyEventsComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
