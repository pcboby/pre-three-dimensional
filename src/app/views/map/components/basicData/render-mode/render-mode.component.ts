import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-render-mode',
  templateUrl: './render-mode.component.html',
  styleUrls: ['./render-mode.component.css']
})
export class RenderModeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  pointRender() {}
  lineRender() {}
  polygonRender() {}

}
