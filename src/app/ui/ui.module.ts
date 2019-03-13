import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from '../messages/messages.module';
import { AppRoutingModule } from '../app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MessagesModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
