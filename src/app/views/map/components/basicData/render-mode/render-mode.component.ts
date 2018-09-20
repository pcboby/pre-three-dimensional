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

  constructor() {}

  ngOnInit() {}
  /**
   * functions
   */
  pointRender() {
    untils().ArkMap().RenderModePoint();
  };
  lineRender() {
    untils().ArkMap().RenderModeLine();
  };
  polygonRender() {
    untils().ArkMap().RenderModeFill();
  };

}
