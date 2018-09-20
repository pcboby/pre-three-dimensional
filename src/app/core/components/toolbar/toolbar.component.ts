import {
  LayoutService,
  MapperService,
  NavigationService
} from '../../services';
import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../config/untils';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  mapModes = [];

  constructor(private navigationService: NavigationService, private mapperService: MapperService, private layoutService: LayoutService) {
    this.mapModes = this.mapperService.getMapModes();
  }

  ngOnInit() {}


  get mapMode() {
    return this.mapperService.mapMode;
  }
  set mapMode(val: string) {
    this.mapperService.mapMode = val;
  }

  get items() {
    return this.navigationService.getTools();
  }

  get selectTool() {
    return this.navigationService.select_tool;
  }

  get showToolbarLabel() {
    return this.layoutService.showToolbarLabel;
  }


  toggle(key: string) {
    this.navigationService.select_tool = this.selectTool === key ? null : key;
  };

  clear() {
    untils().ArkMap().ClearAll();
  };
}
