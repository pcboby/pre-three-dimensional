import {
  NavigationService
} from './../../services/navigation.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userPhoto = null; // '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {}

  get items() {
    return this.navigationService.getNavs();
  }

  get selectNav() {
    return this.navigationService.select_nav;
  }

  select(key: string) {
    this.navigationService.select_nav = key;
    this.navigationService.select_tool = null;
  }

}
