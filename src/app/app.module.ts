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
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRouting,
    CoreModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
