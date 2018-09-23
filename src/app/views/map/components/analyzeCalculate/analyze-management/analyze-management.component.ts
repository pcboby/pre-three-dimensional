import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../../../config/untils';
import { MapperService } from '../../../../../core/services';

@Component({
  selector: 'app-analyze-management',
  templateUrl: './analyze-management.component.html',
  styleUrls: ['./analyze-management.component.css']
})
export class AnalyzeManagementComponent implements OnInit {

  constructor(private mapperService: MapperService) {}

  ngOnInit() {}
  sectionAnalyze() {
    this.mapperService.closeRoam();
    untils().ArkMap().AnalyzeSection();

  }
  fillDigAnalyze() {
    this.mapperService.closeRoam();
    untils().ArkMap().AnalyzeFillDig();
  }

  pointBuffer() {
    this.mapperService.closeRoam();
    untils().ArkMap().SA_PointBuffer();
  }
  lineBuffer() {
    this.mapperService.closeRoam();
    untils().ArkMap().SA_LineBuffer();
  }
  areaBuffer() {
    this.mapperService.closeRoam();
    untils().ArkMap().SA_AreaBuffer();
  }

  waterAnalyze() {}
  overlayAnalyze() {
    this.mapperService.closeRoam();
    untils().ArkMap().SA_IntersectionTool();
  }
  slopeAnalyze() {}
  visualAnalyze() {
    this.mapperService.closeRoam();
    untils().ArkMap().AnalyzeSection();
  }

}
