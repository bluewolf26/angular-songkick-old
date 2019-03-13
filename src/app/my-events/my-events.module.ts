// module imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// component imports
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAddComponent } from './event-add/event-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyEventsComponent
  ],
  declarations: [MyEventsComponent, EventsComponent, EventDetailsComponent, EventAddComponent]
})
export class MyEventsModule { }
