import {
  NavigationService
} from './../../../../core/services/navigation.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}


  ngOnInit() {}

  get controlId() {
    return this.navigationService.select_tool || '';
  }
}
