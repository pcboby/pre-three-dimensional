import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavigationService,
  LayoutService
} from '../../core/services';

@Component({
  selector: 'app-lanzhou',
  templateUrl: './lanzhou.component.html',
  styleUrls: ['./lanzhou.component.css']
})
export class LanzhouComponent implements OnInit {

  constructor(private navigationService: NavigationService, private layoutService: LayoutService) {
    this.navigationService.projectCode = 'lanzhou';
    this.navigationService.select_nav = 'layer';
  }

  ngOnInit() {}

  get sidebar_isHidden() {
    return !this.navigationService.select_tool;
  }
  get sideTitle() {
    return this.navigationService.getTool()['title'] || '';
  }
  get sideIcon() {
    return this.navigationService.getTool()['icon'] || '';
  }
  get sideWidth() {
    // const sw = this.navigationService.getTool()['sideWidth'];

    return this.navigationService.getTool()['sideWidth'];
  }
  get showHeader() {
    return this.layoutService.showHeader;
  }
  get showSilder() {
    return this.layoutService.showSilder;
  }
  get showFooter() {
    return this.layoutService.showFooter;
  }
  get showToolbar() {
    return this.layoutService.showToolbar;
  }
  get showSidebar() {
    return this.layoutService.showSidebar;
  }

}
