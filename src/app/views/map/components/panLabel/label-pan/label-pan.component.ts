import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-label-pan',
  templateUrl: './label-pan.component.html',
  styleUrls: ['./label-pan.component.css']
})
export class LabelPanComponent implements OnInit {
  pointLabelText = '点标注';

  constructor() {}

  ngOnInit() {}
  pointLabel() {
    // untils().ArkMap().setLabelDetailText('标注点');
    untils().ArkMap().setLabelDetailText(this.pointLabelText);
    untils().ArkMap().DrawPoint();
  }

polylineLabel() {
  untils().ArkMap().DrawPolyline();
}
polygonLabel() {
  untils().ArkMap().DrawPolygon();
}
rectangleLabel() {
  untils().ArkMap().DrawRect();
}
circleLabel() {
  untils().ArkMap().DrawCircle();
}
ellipseLabel() {
  untils().ArkMap().DrawEllipse();
}
arcLabel() {
  untils().ArkMap().DrawArc();
}
sectorLabel() {
  untils().ArkMap().DrawSector();
}


}
