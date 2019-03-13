import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import modules
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';

// import components
import { ArtistSearchComponent } from './artist-search.component';

// import services
import { SongkickService } from '../../services/songkick/songkick.service';
import { MockSongkickService } from '../../services/songkick/songkick.service.mock';

describe('ArtistSearchComponent', () => {
  let component: ArtistSearchComponent;
  let fixture: ComponentFixture<ArtistSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSearchComponent ],
      imports: [ SharedModule, RouterTestingModule ],
      providers: [
        {
          provide: SongkickService,
          useClass: MockSongkickService
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
