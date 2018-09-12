import {
  ErrorComponent,
  LoginComponent
} from './core/components';
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '', // 默认
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'error', // 出错
    component: ErrorComponent
  },
  {
    path: 'login', // 登录
    component: LoginComponent
  },
  {
    path: 'map',
    loadChildren: './views/map/map.module#MapModule'
  },
  {
    path: '**', // 路由判定
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
