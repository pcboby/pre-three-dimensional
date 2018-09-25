import { Component, OnInit } from '@angular/core';
import { NavigationService, LayoutService } from '../../core/services';

@Component({
  selector: 'app-lanzhou',
  templateUrl: './lanzhou.component.html',
  styleUrls: ['./lanzhou.component.css']
})
export class LanzhouComponent implements OnInit {

  constructor(private navigationService: NavigationService, private layoutService: LayoutService) {}

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
