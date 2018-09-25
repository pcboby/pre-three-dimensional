import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LanzhouComponent
} from './lanzhou.component';

const routes: Routes = [{
  path: '',
  component: LanzhouComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzhouRouting {}
