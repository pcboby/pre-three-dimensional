import { MapRouting } from './map.routing';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    MapRouting,
    CoreModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
