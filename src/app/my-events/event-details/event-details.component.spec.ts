import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import modules
import { SharedModule } from '../../shared/shared.module';

// import components
import { EventDetailsComponent } from './event-details.component';

// import models
import { Event } from '../../models/event';
import { Venue } from '../../models/venue';
import { Artist } from '../../models/artist';

// mocks fot testing
const testVenue = new Venue(2278019, 'Royal Hospital Chelsea', 'London', 'UK',
                            51.4866, -0.16041);
const testArtist = new Artist(46215, 'Toto');
const testEvent = new Event(2278019, 'Toto at Royal Hospital Chelsea (June 13, 2019)',
                            'concert', testVenue, new Date() ,
                            testArtist);

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsComponent ],
      imports: [ SharedModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    component.event = testEvent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
