import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../../../config/untils';
import { MapperService } from '../../../../../core/services';

@Component({
  selector: 'app-click-query',
  templateUrl: './click-query.component.html',
  styleUrls: ['./click-query.component.css']
})
export class ClickQueryComponent implements OnInit {

  queryMode = '';
  items = [{
    key: 'keyname',
    type: 'keytype',
    value: 'keyvalue'
  }, {
    key: 'keyname1',
    type: 'keytype1',
    value: 'keyvalue1'
  }, {
    key: 'keyname2',
    type: 'keytype2',
    value: 'keyvalue2'
  }];

  constructor(private mapperService: MapperService) {}

  ngOnInit() {}
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
