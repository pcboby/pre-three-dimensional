import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-render-mode',
  templateUrl: './render-mode.component.html',
  styleUrls: ['./render-mode.component.css']
})
export class RenderModeComponent implements OnInit {

  set randerMode(mode: number) {
    untils().ArkMap().setRenderMode(mode);
  }

  constructor() {}

  ngOnInit() {}

}
