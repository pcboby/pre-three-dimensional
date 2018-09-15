import {
  MapCesiumDirective,
  MapArkDirective,
  MapFlashDirective
} from './directies';

import {
  NavigationService,
  MapperService
} from './services';
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';
import {
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  LoginComponent,
  ErrorComponent,
  ToolbarComponent,
  SidebarComponent,
  LayoutComponent,
  MapperComponent
} from './components';
import {
  NgZorroAntdModule
} from 'ng-zorro-antd';


const modules = [
  RouterModule,
  CommonModule,
  NgZorroAntdModule
];

const directives = [
  MapFlashDirective,
  MapArkDirective,
  MapCesiumDirective
];

const components = [
  HeaderComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  ToolbarComponent,
  SidebarComponent,
  LayoutComponent,
  LoginComponent,
  MapperComponent,
  ErrorComponent
];

const services = [
  NavigationService,
  MapperService
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...directives,
    ...components
  ],
  exports: [
    ...directives,
    ...components
  ],
  providers: [
    ...services
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    // throwIfAlreadyLoaded(parent, 'CoreModule');
  }
}
