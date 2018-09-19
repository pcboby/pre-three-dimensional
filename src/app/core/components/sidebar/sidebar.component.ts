import {
  NavigationService
} from './../../services/navigation.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() title = '属性设置';
  @Input() icon = 'fa fa-search';

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {}

  close() {
    this.navigationService.select_tool = null;
  }

}
