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
    path: 'lanzhou',
    loadChildren: './views/lanzhou/lanzhou.module#LanzhouModule'
  },
  {
    path: '**', // 路由判定
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRouting {}
