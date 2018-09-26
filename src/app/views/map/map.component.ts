import {
  NavigationService
} from './../../core/services/navigation.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { LayoutService } from '../../core/services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private navigationService: NavigationService, private layoutService: LayoutService) {
    this.navigationService.projectCode = 'chongqing';
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
