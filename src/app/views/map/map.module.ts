import { ArkmapComponent } from './components/arkmap/arkmap.component';
import { CommonModule } from '@angular/common';

import {
  ElModule
} from 'element-angular';
import {
  ControlsComponent,
  C001001Component,
  C001002Component,
  C001003Component,
  C002001Component,
  C002002Component,
  C003001Component,
  C003002Component,
  C004001Component,
  C004002Component,
  C004003Component,
  C004004Component,
  C004005Component,
  C004006Component,
  C004007Component,
  C004008Component,
  C005001Component,
  C005002Component
} from './components';
import {
  MapRouting
} from './map.routing';
import {
  CoreModule
} from './../../core/core.module';
import {
  NgModule
} from '@angular/core';
import {
  MapComponent
} from './map.component';

const controlComponents = [
  ControlsComponent,
  ArkmapComponent,
  C001001Component,
  C001002Component,
  C001003Component,
  C002001Component,
  C002002Component,
  C003001Component,
  C003002Component,
  C004001Component,
  C004002Component,
  C004003Component,
  C004004Component,
  C004005Component,
  C004006Component,
  C004007Component,
  C004008Component,
  C005001Component,
  C005002Component
];

@NgModule({
  imports: [
    MapRouting,
    CoreModule,
    CommonModule,
    ElModule.forRoot()
  ],
  declarations: [MapComponent, ...controlComponents]
})
export class MapModule {}
