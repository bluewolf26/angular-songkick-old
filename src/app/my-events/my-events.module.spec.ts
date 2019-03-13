import { MyEventsModule } from './my-events.module';

describe('MyEventsModule', () => {
  let myEventsModule: MyEventsModule;

  beforeEach(() => {
    myEventsModule = new MyEventsModule();
  });

  it('should create an instance', () => {
    expect(myEventsModule).toBeTruthy();
  });
});
