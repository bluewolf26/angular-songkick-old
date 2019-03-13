import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import modules
import { SharedModule } from '../../shared/shared.module';

// import services
import { SongkickService } from '../../services/songkick/songkick.service';
import { MockSongkickService } from '../../services/songkick/songkick.service.mock';
import { FoursquareService } from '../../services/foursquare/foursquare.service';
import { MockFoursquareService } from '../../services/foursquare/foursquare.service.mock';

import { EventAddComponent } from './event-add.component';

describe('EventAddComponent', () => {
  let component: EventAddComponent;
  let fixture: ComponentFixture<EventAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAddComponent ],
      imports: [ SharedModule ],
      providers: [
        {
          provide: SongkickService,
          useClass: MockSongkickService
        },
        {
          provide: FoursquareService,
          useClass: MockFoursquareService
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
