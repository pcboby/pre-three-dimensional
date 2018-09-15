import {
  MapperService
} from './../../services/mapper.service';
import {
  NavigationService
} from './../../services/navigation.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  mapModes = [];

  constructor(public navigationService: NavigationService, public mapperService: MapperService) {
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


  toggle(key: string) {
    this.navigationService.select_tool = this.selectTool === key ? null : key;
  }

  clear() {
    console.log('do map clear~~');
  }
}
