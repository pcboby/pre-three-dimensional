import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanzhouComponent } from './lanzhou.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanzhouRouting } from '../lanzhou/lanzhou.routing';
import { CoreModule } from '../../core/core.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ControlsComponent } from './components';
const controlComponents = [
  ControlsComponent
];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LanzhouRouting,
    CoreModule,
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    Ng2Charts
  ],
  declarations: [LanzhouComponent, ...controlComponents]
})
export class LanzhouModule { }
