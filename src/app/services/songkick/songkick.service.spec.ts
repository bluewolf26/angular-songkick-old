import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { GETARTISTSMOCK,
          SEARCHARTISTRESULTPMOCK,
          GETARTISTNULLMOCK,
          GETCALENDARMOCK,
          GETEVENTSRESULTPMOCK,
          GETEVENTSNULLPMOCK} from './songkick-results-mock';

import { SONGCKICKAPICONF } from './songkick-api-config';

import { SongkickService } from './songkick.service';
import { MessageService } from '../message/message.service';

describe('SongkickService', () => {
  let httpMock: HttpTestingController;
  let service: SongkickService;
  let messageService: MessageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongkickService],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.get(SongkickService);
    messageService = TestBed.get(MessageService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([SongkickService], (serv: SongkickService) => {
    expect(serv).toBeTruthy();
  }));

  describe('searchArtist', () => {
    it('should make a GET request', () => {
      service.searchArtist('test').subscribe();

      const req = httpMock
          .expectOne(request => request.method === 'GET' &&
           request.url === SONGCKICKAPICONF.urlSearchArtists);
      expect(req.request.method).toEqual('GET');
    });

    it('should have the right URL', () => {

      service.searchArtist('test').subscribe();

      const req = httpMock
          .expectOne(request => request.method === 'GET' &&
           request.url === SONGCKICKAPICONF.urlSearchArtists);
      expect(req.request.url).toBe(SONGCKICKAPICONF.urlSearchArtists);
    });

    it('should have the right params', () => {

      service.searchArtist('test').subscribe();

      const req = httpMock
          .expectOne(request => request.method === 'GET' && request.url === `${service.urlArtist}`);
      expect(req.request.params.get('query')).toEqual('toto');
      expect(req.request.params.get('apikey')).toEqual(SONGCKICKAPICONF.apiKey);
    });

    it('should transform the API result and return a list of 3 Artist objects', () => {

      service.searchArtist('banda black rio').subscribe((res) => {
        expect(res).toEqual(SEARCHARTISTRESULTPMOCK);
      });

      const req = httpMock
          .expectOne(request => request.method === 'GET'
           && request.url === SONGCKICKAPICONF.urlSearchArtists);
      req.flush(GETARTISTSMOCK);
    });

    it('should return an empty array when no term passed', () => {

      service.searchArtist('').subscribe((res) => {
        expect(res).toEqual([]);
      });
    });

    it('should return an empty array when no results are sent back by the API', () => {

      service.searchArtist('sqd').subscribe((res) => {
        expect(res).toEqual([]);
      });
      const req = httpMock.expectOne(request => request.method === 'GET' &&
                                      request.url === SONGCKICKAPICONF.urlSearchArtists);
      req.flush(GETARTISTNULLMOCK);
    });
    it('should call handleError function when an error is rendered by the API', () => {
      // spyOn<any>(service, 'handleError').and.returnValue('');
      spyOn(window.console, 'log');
      spyOn(messageService, 'add');
      service.searchArtist('sqd').subscribe(() => {}, err => {
        expect(window.console.log).toHaveBeenCalled();
        expect(messageService).toHaveBeenCalled();
      });
      httpMock.expectOne(request => request.method === 'GET' &&
                        request.url === SONGCKICKAPICONF.urlSearchArtists)
                        .error(new ErrorEvent('network error'));
    });
  });

  describe('getEvents', () => {
    it('should make a GET request', () => {
      service.getEvents(1).subscribe();

      const url = SONGCKICKAPICONF.urlSearchEvents.replace('${id}', '1');
      const req = httpMock
          .expectOne(request => request.method === 'GET' &&
           request.url === url);
      expect(req.request.method).toEqual('GET');
    });
    it('should have the right URL', () => {
      service.getEvents(1).subscribe();
      const url = SONGCKICKAPICONF.urlSearchEvents.replace('${id}', '1');
      const req = httpMock
          .expectOne(request => request.method === 'GET' &&
           request.url === url);
      expect(req.request.url).toBe(url);
    });
    it('should have the right params', () => {
      service.getEvents(1).subscribe();
      const url = SONGCKICKAPICONF.urlSearchEvents.replace('${id}', '1');
      const req = httpMock
          .expectOne(request => request.method === 'GET' && request.url === url);
      expect(req.request.params.get('apikey')).toEqual(SONGCKICKAPICONF.apiKey);
    });
    it('should transform the API result and return a list of 4 Event objects', () => {
      service.getEvents(46215).subscribe((res) => {
        expect(res).toEqual(GETEVENTSRESULTPMOCK);
      });
      const url = SONGCKICKAPICONF.urlSearchEvents.replace('${id}', '46215');
      const req = httpMock
          .expectOne(request => request.method === 'GET'
           && request.url === url);
      req.flush(GETCALENDARMOCK);
    });
    it('should return an empty array when no results are sent back by the API', () => {
      service.getEvents(1).subscribe((res) => {
        expect(res).toEqual([]);
      });
      const url = SONGCKICKAPICONF.urlSearchEvents.replace('${id}', '1');
      const req = httpMock
          .expectOne(request => request.method === 'GET'
           && request.url === url);
      req.flush(GETEVENTSNULLPMOCK);
    });
  });
});
