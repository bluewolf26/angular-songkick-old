import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import modules
import { SharedModule } from '../../shared/shared.module';

// import components
import { MyEventsComponent } from './my-events.component';
import { EventAddComponent } from '../event-add/event-add.component';
import { EventsComponent } from '../events/events.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

// import services
import { EventService } from '../../services/event/event.service';
import { MockEventService } from '../../services/event/event.service.mock';
import { MessageService } from '../../services/message/message.service';
import { MockMessageService } from '../../services/message/message.service.mock';


describe('MyEventsComponent', () => {
  let component: MyEventsComponent;
  let fixture: ComponentFixture<MyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventsComponent, EventAddComponent, EventsComponent,
                      EventDetailsComponent],
      imports: [ SharedModule ],
      providers: [
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
    fixture = TestBed.createComponent(MyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
