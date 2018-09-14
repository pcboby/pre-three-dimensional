import {
  NavigationService
} from './../../services/navigation.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {}

  close() {
    this.navigationService.select_tool = null;
  }

}
