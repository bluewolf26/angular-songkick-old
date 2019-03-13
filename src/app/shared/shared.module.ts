import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
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
  imports: [
    CommonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkVxIhZI5NA5fZmufRt3Nttif4FLEqvIs'
    }),
    SocketIoModule.forRoot(config)
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgbModule,
    AgmCoreModule,
    SocketIoModule
  ],
  declarations: []
})
export class SharedModule { }
