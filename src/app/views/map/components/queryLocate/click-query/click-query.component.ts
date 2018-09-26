import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import untils from '../../../../../config/untils';
import {
  MapperService
} from '../../../../../core/services';

@Component({
  selector: 'app-click-query',
  templateUrl: './click-query.component.html',
  styleUrls: ['./click-query.component.css']
})
export class ClickQueryComponent implements OnInit {

  queryMode = '';

  // get data_name() {
  //   return untils().ArkMap()['_OnToolEvent_Query_value'].name;
  // }
  // get data_class() {
  //   return untils().ArkMap()['_OnToolEvent_Query_value'].class;
  // }
  // get data_ToolName() {
  //   return untils().ArkMap()['_OnToolEvent_Query_value'].ToolName;
  // }
  gridData = {
    name: '',
    class: '',
    ToolName: ''
  };


  constructor(private mapperService: MapperService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getGridData();
  }

  getGridData() {
    setTimeout(() => {
      const d = untils().ArkMap()['_OnToolEvent_Query_value'] || {};
      this.gridData = {
        name: d.name,
        class: d.class,
        ToolName: d.ToolName
      };
      this.getGridData();
    }, 350);
  }

  queryVector() {
    this.mapperService.closeRoam();
    this.queryMode = 'vector';
    untils().ArkMap().QueryVector();
  }
  queryVectorClose() {
    this.queryMode = '';
  }
  queryFixedModel() {
    this.mapperService.closeRoam();
    this.queryMode = 'fixed';
    untils().ArkMap().QueryFixedModel();
  }
  queryFixedModelClose() {
    this.queryMode = '';
  }

}
