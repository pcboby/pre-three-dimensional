import { CommonModule } from '@angular/common';
import {
  CoreModule
} from './core/core.module';
import {
  BrowserModule
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  AppRouting
} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRouting,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
