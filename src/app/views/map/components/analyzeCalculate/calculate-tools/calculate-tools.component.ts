import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../../../config/untils';
import { MapperService } from '../../../../../core/services';

@Component({
  selector: 'app-calculate-tools',
  templateUrl: './calculate-tools.component.html',
  styleUrls: ['./calculate-tools.component.css']
})
export class CalculateToolsComponent implements OnInit {

  constructor(private mapperService: MapperService) {}

  ngOnInit() {}
  distanceCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureDist();
  }
  terrainDistanceCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureTerrDist();

  }
  areaCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureArea();

  }
  terrainAreaCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureTerrArea();

  }
  heightCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureHeight();

  }
  angleCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureAngle();
  }
  coordinateCalculate() {
    this.mapperService.closeRoam();
    untils().ArkMap().MeasureCoordinate();

  }

}
