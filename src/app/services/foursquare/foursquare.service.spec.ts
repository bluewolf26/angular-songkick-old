import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FoursquareService } from './foursquare.service';

describe('FoursquareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoursquareService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([FoursquareService], (service: FoursquareService) => {
    expect(service).toBeTruthy();
  }));
});
