// module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './/app-routing.module';
import { UiModule } from './ui/ui.module';
import { MyEventsModule } from './my-events/my-events.module';
import { MessagesModule } from './messages/messages.module';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';

// component imports
import { AppComponent } from './app.component';

// service imports
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { ArtistsModule } from './artists/artists.module';
import { SharedModule } from './shared/shared.module';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': '#e5eced',
  'bgsOpacity': 0.5,
  'bgsPosition': 'bottom-right',
  'bgsSize': 60,
  'bgsType': 'rectangle-bounce',
  'blur': 0,
  'fgsColor': '#007bff',
  'fgsPosition': 'center-center',
  'fgsSize': 100,
  'fgsType': 'rectangle-bounce-pulse-out-rapid',
  'gap': 24,
  'logoPosition': 'center-center',
  'logoSize': 120,
  'logoUrl': '',
  'masterLoaderId': 'master',
  'overlayBorderRadius': '0',
  'overlayColor': 'rgb(244,247,248)',
  'pbColor': '#004085',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': true,
  'text': 'Loading ...',
  'textColor': '#007bff',
  'textPosition': 'center-center',
  'threshold': 500
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true },
    ),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    UiModule,
    MyEventsModule,
    MessagesModule,
    FormsModule,
    ArtistsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
