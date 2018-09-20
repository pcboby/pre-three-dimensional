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
    // untils().ArkMap().test1('111');
    // console.log(untils().ArkMapRef()['ArkScene']);
            // var url = 'http://' + window.location.host + '/assets/Data/Terrains/ChongQing.arkpro';
            // untils().ArkMapRef()['Initialize'](url);
            // untils().ArkMapRef()['ArkScene']['RenderMode'] = 0
            untils().ArkMap().RenderModePoint();
  }
  lineRender() {}
  polygonRender() {}

}
