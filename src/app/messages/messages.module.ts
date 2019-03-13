import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MessagesComponent
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
