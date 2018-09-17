import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  objectName = '重庆市防汛管理三维信息系统';
  objectVersion = 'v1.0.0';

  showHeader = true;
  showSilder = true;
  showFooter = true;

  showToolbar = true;
  showSidebar = true;

  constructor() {}

}
