import {
  NavigationService
} from './../../core/services/navigation.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {}

  get sidebar_isHidden() {
    return !this.navigationService.select_tool;
  }

}
