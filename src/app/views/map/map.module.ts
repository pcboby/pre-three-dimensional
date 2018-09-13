import {
  ControlsComponent
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
  CommonModule
} from '@angular/common';
import {
  MapComponent
} from './map.component';

const controlComponents = [
  ControlsComponent
];

@NgModule({
  imports: [
    CommonModule,
    MapRouting,
    CoreModule
  ],
  declarations: [MapComponent, ControlsComponent]
})
export class MapModule {}
