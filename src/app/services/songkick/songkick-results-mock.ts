import { Artist } from '../../models/artist';
import { Event } from '../../models/event';
import { Venue } from '../../models/venue';

// http://api.songkick.com/api/3.0/search/artists.json mock
export const GETARTISTSMOCK = {
  resultsPage: {
    status: 'ok',
    results: {
      artist: [
        {
          id: 266751,
          displayName: 'Banda Black Rio',
          uri: 'http://www.songkick.com/artists/266751-banda-black-rio?utm_source=14198&utm_medium=partner',
          identifier: [
            {
              mbid: '2b99cd8e-55de-4a42-9cb8-6489f3195a4b',
              href: 'http://api.songkick.com/api/3.0/artists/mbid:2b99cd8e-55de-4a42-9cb8-6489f3195a4b.json',
              eventsHref: 'http://api.songkick.com/api/3.0/artists/mbid:2b99cd8e-55de-4a42-9cb8-6489f3195a4b/calendar.json',
              setlistsHref: 'http://api.songkick.com/api/3.0/artists/mbid:2b99cd8e-55de-4a42-9cb8-6489f3195a4b/setlists.json'
            }
          ],
          onTourUntil: '2019-02-20'
        },
        {
          displayName: 'The Black Crowes',
          onTourUntil: null,
          uri: 'http://www.songkick.com/artists/87388-black-crowes?utm_source=14198&utm_medium=partner',
          identifier: [
            {
              href: 'http://api.songkick.com/api/3.0/artists/mbid:02ceff75-7363-493e-a78d-912dc86c7460.json',
              mbid: '02ceff75-7363-493e-a78d-912dc86c7460',
              eventsHref: 'http://api.songkick.com/api/3.0/artists/mbid:02ceff75-7363-493e-a78d-912dc86c7460/calendar.json',
              setlistsHref: 'http://api.songkick.com/api/3.0/artists/mbid:02ceff75-7363-493e-a78d-912dc86c7460/setlists.json'
            }
          ],
          id: 87388
        },
        {
          id: 349473,
          displayName: 'Black Lips',
          uri: 'http://www.songkick.com/artists/349473-black-lips?utm_source=14198&utm_medium=partner',
          identifier: [
            {
              mbid: 'e940d7a3-01d0-468c-86ea-5dc4d89dcf80',
              href: 'http://api.songkick.com/api/3.0/artists/mbid:e940d7a3-01d0-468c-86ea-5dc4d89dcf80.json',
              eventsHref: 'http://api.songkick.com/api/3.0/artists/mbid:e940d7a3-01d0-468c-86ea-5dc4d89dcf80/calendar.json',
              setlistsHref: 'http://api.songkick.com/api/3.0/artists/mbid:e940d7a3-01d0-468c-86ea-5dc4d89dcf80/setlists.json'
            }
          ],
          onTourUntil: '2019-06-05'
        }
      ]
    },
    perPage: 50,
    page: 1,
    totalEntries: 3
  }
};
export const SEARCHARTISTRESULTPMOCK = new Array<Artist>(
                                          new Artist(266751, 'Banda Black Rio'),
                                          new Artist(87388, 'The Black Crowes'),
                                          new Artist(349473, 'Black Lips'));

export const GETARTISTNULLMOCK = {
  resultsPage: {
    status: 'ok',
    results: {},
    perPage: 50,
    page: 1,
    totalEntries: 0
  }
};



// http://api.songkick.com/api/3.0/artists/${id}/calendar.json mock
export const GETCALENDARMOCK = {
  resultsPage: {
    status: 'ok',
    results: {
      event: [
        {
          'id': 37096779,
          'displayName': 'SHAYFEEN and Toto at Le Botanique (April 4, 2019)',
          'type': 'Concert',
          'uri': 'http://www.songkick.com/concerts/37096779-shayfeen-at-le-botanique?utm_source=14198&utm_medium=partner',
          'status': 'ok',
          'popularity': 0.121869,
          'start': {
            'date': '2019-04-04',
            'datetime': '2019-04-04T20:00:00+0200',
            'time': '20:00:00'
          },
          'performance': [
            {
              'id': 70555094,
              'displayName': 'SHAYFEEN',
              'billing': 'headline',
              'billingIndex': 1,
              'artist': {
                'id': 9333864,
                'displayName': 'SHAYFEEN',
                'uri': 'http://www.songkick.com/artists/9333864-shayfeen?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '9917fe58-ae39-4ad4-9801-22b849e80cd5',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:9917fe58-ae39-4ad4-9801-22b849e80cd5.json'
                  }
                ]
              }
            },
            {
              'id': 70555099,
              'displayName': 'Toto',
              'billing': 'headline',
              'billingIndex': 2,
              'artist': {
                'id': 46215,
                'displayName': 'Toto',
                'uri': 'http://www.songkick.com/artists/46215-toto?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '7afeaec7-baee-41c7-b42e-71f42b77a9df',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:7afeaec7-baee-41c7-b42e-71f42b77a9df.json'
                  },
                  {
                    'mbid': 'aab5c954-cabe-432e-899e-1c4f99757327',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:aab5c954-cabe-432e-899e-1c4f99757327.json'
                  }
                ]
              }
            }
          ],
          'ageRestriction': null,
          'flaggedAsEnded': false,
          'venue': {
            'id': 32662,
            'displayName': 'Le Botanique',
            'uri': 'http://www.songkick.com/venues/32662-le-botanique?utm_source=14198&utm_medium=partner',
            'metroArea': {
              'displayName': 'Brussels',
              'country': {
                'displayName': 'Belgium'
              },
              'id': 26854,
              'uri': 'http://www.songkick.com/metro_areas/26854-belgium-brussels?utm_source=14198&utm_medium=partner'
            },
            'lat': 50.85489,
            'lng': 4.36551
          },
          'location': {
            'city': 'Brussels, Belgium',
            'lat': 50.85489,
            'lng': 4.36551
          }
        },
        {
          'id': 36213984,
          'displayName': 'Toto at Royal Hospital Chelsea (June 13, 2019)',
          'type': 'Concert',
          'uri': 'http://www.songkick.com/concerts/36213984-toto-at-royal-hospital-chelsea?utm_source=14198&utm_medium=partner',
          'status': 'ok',
          'popularity': 0.123644,
          'start': {
            'date': '2019-06-13',
            'datetime': '2019-06-13T17:30:00+0100',
            'time': '17:30:00'
          },
          'performance': [
            {
              'id': 69089384,
              'displayName': 'Toto',
              'billing': 'headline',
              'billingIndex': 1,
              'artist': {
                'id': 46215,
                'displayName': 'Toto',
                'uri': 'http://www.songkick.com/artists/46215-toto?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '7afeaec7-baee-41c7-b42e-71f42b77a9df',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:7afeaec7-baee-41c7-b42e-71f42b77a9df.json'
                  },
                  {
                    'mbid': 'aab5c954-cabe-432e-899e-1c4f99757327',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:aab5c954-cabe-432e-899e-1c4f99757327.json'
                  }
                ]
              }
            }
          ],
          'ageRestriction': null,
          'flaggedAsEnded': false,
          'venue': {
            'id': 2278019,
            'displayName': 'Royal Hospital Chelsea',
            'uri': 'http://www.songkick.com/venues/2278019-royal-hospital-chelsea?utm_source=14198&utm_medium=partner',
            'metroArea': {
              'displayName': 'London',
              'country': {
                'displayName': 'UK'
              },
              'id': 24426,
              'uri': 'http://www.songkick.com/metro_areas/24426-uk-london?utm_source=14198&utm_medium=partner'
            },
            'lat': 51.4866,
            'lng': -0.16041
          },
          'location': {
            'city': 'London, UK',
            'lat': 51.4866,
            'lng': -0.16041
          }
        },
        {
          'id': 36200374,
          'displayName': 'Toto at Live at the Marquee (June 15, 2019)',
          'type': 'Concert',
          'uri': 'http://www.songkick.com/concerts/36200374-toto-at-live-at-the-marquee?utm_source=14198&utm_medium=partner',
          'status': 'ok',
          'popularity': 0.123644,
          'start': {
            'date': '2019-06-15',
            'datetime': '2019-06-15T20:00:00+0100',
            'time': '20:00:00'
          },
          'performance': [
            {
              'id': 69067259,
              'displayName': 'Toto',
              'billing': 'headline',
              'billingIndex': 1,
              'artist': {
                'id': 46215,
                'displayName': 'Toto',
                'uri': 'http://www.songkick.com/artists/46215-toto?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '7afeaec7-baee-41c7-b42e-71f42b77a9df',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:7afeaec7-baee-41c7-b42e-71f42b77a9df.json'
                  },
                  {
                    'mbid': 'aab5c954-cabe-432e-899e-1c4f99757327',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:aab5c954-cabe-432e-899e-1c4f99757327.json'
                  }
                ]
              }
            }
          ],
          'ageRestriction': null,
          'flaggedAsEnded': false,
          'venue': {
            'id': 96160,
            'displayName': 'Live at the Marquee',
            'uri': 'http://www.songkick.com/venues/96160-live-at-the-marquee?utm_source=14198&utm_medium=partner',
            'metroArea': {
              'displayName': 'Cork',
              'country': {
                'displayName': 'Ireland'
              },
              'id': 29313,
              'uri': 'http://www.songkick.com/metro_areas/29313-ireland-cork?utm_source=14198&utm_medium=partner'
            },
            'lat': 51.89803,
            'lng': -8.44815
          },
          'location': {
            'city': 'Cork, Ireland',
            'lat': 51.89803,
            'lng': -8.44815
          }
        },
        {
          'id': 36217024,
          'displayName': 'Lucca Summer Festival 2019',
          'type': 'Festival',
          'uri': 'http://www.songkick.com/festivals/69936-lucca-summer/' +
          'id/36217024-lucca-summer-festival-2019?utm_source=14198&utm_medium=partner',
          'status': 'ok',
          'popularity': 0.154402,
          'start': {
            'date': '2019-06-28',
            'datetime': null,
            'time': null
          },
          'performance': [
            {
              'id': 69411209,
              'displayName': 'New Order',
              'billing': 'headline',
              'billingIndex': 1,
              'artist': {
                'id': 434538,
                'displayName': 'New Order',
                'uri': 'http://www.songkick.com/artists/434538-new-order?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': 'f1106b17-dcbb-45f6-b938-199ccfab50cc',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:f1106b17-dcbb-45f6-b938-199ccfab50cc.json'
                  },
                  {
                    'mbid': '15a18d3c-d667-49c2-a573-cde6329d8fce',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:15a18d3c-d667-49c2-a573-cde6329d8fce.json'
                  }
                ]
              }
            },
            {
              'id': 69396924,
              'displayName': 'Macklemore',
              'billing': 'headline',
              'billingIndex': 2,
              'artist': {
                'id': 5705329,
                'displayName': 'Macklemore',
                'uri': 'http://www.songkick.com/artists/5705329-macklemore?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': 'b6d7ec94-830c-44dd-b699-ce66556b7e55',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:b6d7ec94-830c-44dd-b699-ce66556b7e55.json'
                  }
                ]
              }
            },
            {
              'id': 69396919,
              'displayName': 'Toto',
              'billing': 'headline',
              'billingIndex': 3,
              'artist': {
                'id': 46215,
                'displayName': 'Toto',
                'uri': 'http://www.songkick.com/artists/46215-toto?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '7afeaec7-baee-41c7-b42e-71f42b77a9df',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:7afeaec7-baee-41c7-b42e-71f42b77a9df.json'
                  },
                  {
                    'mbid': 'aab5c954-cabe-432e-899e-1c4f99757327',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:aab5c954-cabe-432e-899e-1c4f99757327.json'
                  }
                ]
              }
            },
            {
              'id': 69094064,
              'displayName': 'Tears For Fears',
              'billing': 'headline',
              'billingIndex': 4,
              'artist': {
                'id': 226543,
                'displayName': 'Tears For Fears',
                'uri': 'http://www.songkick.com/artists/226543-tears-for-fears?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '7c7f9c94-dee8-4903-892b-6cf44652e2de',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:7c7f9c94-dee8-4903-892b-6cf44652e2de.json'
                  }
                ]
              }
            },
            {
              'id': 69264734,
              'displayName': 'Scorpions',
              'billing': 'headline',
              'billingIndex': 5,
              'artist': {
                'id': 295329,
                'displayName': 'Scorpions',
                'uri': 'http://www.songkick.com/artists/295329-scorpions?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': 'a60aa668-a3dc-4f18-8b3c-085fcff19078',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:a60aa668-a3dc-4f18-8b3c-085fcff19078.json'
                  },
                  {
                    'mbid': 'c3cceeed-3332-4cf0-8c4c-bbde425147b6',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:c3cceeed-3332-4cf0-8c4c-bbde425147b6.json'
                  },
                  {
                    'mbid': '5dc3d829-9131-4732-839a-432c9cd35c38',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:5dc3d829-9131-4732-839a-432c9cd35c38.json'
                  }
                ]
              }
            },
            {
              'id': 69194094,
              'displayName': 'Elbow',
              'billing': 'headline',
              'billingIndex': 6,
              'artist': {
                'id': 475886,
                'displayName': 'Elbow',
                'uri': 'http://www.songkick.com/artists/475886-elbow?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '3cb3928a-526c-4a3d-93c5-53315fa9bde0',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:3cb3928a-526c-4a3d-93c5-53315fa9bde0.json'
                  }
                ]
              }
            },
            {
              'id': 69396909,
              'displayName': 'Take That',
              'billing': 'headline',
              'billingIndex': 7,
              'artist': {
                'id': 164953,
                'displayName': 'Take That',
                'uri': 'http://www.songkick.com/artists/164953-take-that?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '24d2505b-388c-46cc-8a64-48223ea6d78d',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:24d2505b-388c-46cc-8a64-48223ea6d78d.json'
                  }
                ]
              }
            },
            {
              'id': 69396929,
              'displayName': 'Mark Knopfler',
              'billing': 'headline',
              'billingIndex': 8,
              'artist': {
                'id': 237463,
                'displayName': 'Mark Knopfler',
                'uri': 'http://www.songkick.com/artists/237463-mark-knopfler?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': 'e49f69da-17d5-4c5c-bac0-dadcb0e588f5',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:e49f69da-17d5-4c5c-bac0-dadcb0e588f5.json'
                  }
                ]
              }
            },
            {
              'id': 69396934,
              'displayName': 'Eros Ramazzotti',
              'billing': 'headline',
              'billingIndex': 9,
              'artist': {
                'id': 96547,
                'displayName': 'Eros Ramazzotti',
                'uri': 'http://www.songkick.com/artists/96547-eros-ramazzotti?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '3ab7295a-54ac-40e8-b1b2-3d110a143550',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:3ab7295a-54ac-40e8-b1b2-3d110a143550.json'
                  }
                ]
              }
            },
            {
              'id': 69200939,
              'displayName': 'The Good, The Bad And The Queen',
              'billing': 'headline',
              'billingIndex': 10,
              'artist': {
                'id': 185157,
                'displayName': 'The Good, The Bad And The Queen',
                'uri': 'http://www.songkick.com/artists/185157-good-the-bad-and-the-queen?utm_source=14198&utm_medium=partner',
                'identifier': [
                  {
                    'mbid': '0f211bfc-8c69-4cb7-9165-acbe4353cb0a',
                    'href': 'http://api.songkick.com/api/3.0/artists/mbid:0f211bfc-8c69-4cb7-9165-acbe4353cb0a.json'
                  }
                ]
              }
            },
            {
              'id': 69396914,
              'displayName': 'De Gregori',
              'billing': 'headline',
              'billingIndex': 11,
              'artist': {
                'id': 268222,
                'displayName': 'De Gregori',
                'uri': 'http://www.songkick.com/artists/268222-de-gregori?utm_source=14198&utm_medium=partner',
                'identifier': []
              }
            }
          ],
          'ageRestriction': null,
          'flaggedAsEnded': false,
          'venue': {
            'id': 3246209,
            'displayName': 'Lucca Summer Festival',
            'uri': 'http://www.songkick.com/venues/3246209-lucca-summer-festival?utm_source=14198&utm_medium=partner',
            'metroArea': {
              'displayName': 'Lucca',
              'country': {
                'displayName': 'Italy'
              },
              'id': 30330,
              'uri': 'http://www.songkick.com/metro_areas/30330-italy-lucca?utm_source=14198&utm_medium=partner'
            },
            'lat': 43.84141,
            'lng': 10.50291
          },
          'location': {
            'city': 'Lucca, Italy',
            'lat': 43.84141,
            'lng': 10.50291
          },
          'end': {
            'date': '2019-07-27',
            'time': null,
            'datetime': null
          },
          'series': {
            'displayName': 'Lucca Summer Festival'
          }
        }
      ]
    },
    perPage: 50,
    page: 1,
    totalEntries: 3
  },
};

export const GETEVENTSRESULTPMOCK = new Array<Event>(
  new Event(37096779,
    'SHAYFEEN and Toto at Le Botanique (April 4, 2019)',
    'Concert',
    new Venue(32662, 'Le Botanique', 'Brussels', 'Belgium', 50.85489, 4.36551),
    new Date('2019-04-04T20:00:00+0200'),
    new Artist(46215, 'Toto')
  ),
  new Event(36213984,
    'Toto at Royal Hospital Chelsea (June 13, 2019)',
    'Concert',
    new Venue(2278019, 'Royal Hospital Chelsea', 'London', 'UK', 51.4866, -0.16041),
    new Date('2019-06-13T17:30:00+0100'),
    new Artist(46215, 'Toto')
  ),
  new Event(36200374,
    'Toto at Live at the Marquee (June 15, 2019)',
    'Concert',
    new Venue(96160, 'Live at the Marquee', 'Cork', 'Ireland', 51.89803, -8.44815),
    new Date('2019-06-15T20:00:00+0100'),
    new Artist(46215, 'Toto')
  ),
  new Event(36217024,
    'Lucca Summer Festival 2019',
    'Festival',
    new Venue(3246209, 'Lucca Summer Festival', 'Lucca', 'Italy', 43.84141, 10.50291),
    new Date('2019-06-28'),
    new Artist(46215, 'Toto')
  ),
);

export const GETEVENTSNULLPMOCK = {
    'resultsPage': {
      'status': 'ok',
      'results': {},
      'perPage': 50,
      'page': 1,
      'totalEntries': 0
    }
};
