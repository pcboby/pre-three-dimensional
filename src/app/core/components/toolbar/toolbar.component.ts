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


  constructor(public navigationService: NavigationService) {}

  ngOnInit() {}

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
