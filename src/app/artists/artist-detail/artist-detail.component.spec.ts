import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import modules
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';

// import components
import { ArtistDetailComponent } from './artist-detail.component';

// import services
import { SongkickService } from '../../services/songkick/songkick.service';
import { MockSongkickService } from '../../services/songkick/songkick.service.mock';
import { EventService } from '../../services/event/event.service';
import { MockEventService } from '../../services/event/event.service.mock';
import { MessageService } from '../../services/message/message.service';
import { MockMessageService } from '../../services/message/message.service.mock';

describe('ArtistDetailComponent', () => {
  let component: ArtistDetailComponent;
  let fixture: ComponentFixture<ArtistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailComponent ],
      imports: [ SharedModule, RouterTestingModule ],
      providers: [
        {
          provide: SongkickService,
          useClass: MockSongkickService
        },
        {
          provide: EventService,
          useClass: MockEventService
        },
        {
          provide: MessageService,
          useClass: MockMessageService
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
