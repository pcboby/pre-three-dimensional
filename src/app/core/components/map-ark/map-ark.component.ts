import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy
} from '@angular/core';

import * as _ from 'lodash';
import untils from '../../../config/untils';
import {
  environment
} from '../../../../environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-map-ark',
  templateUrl: './map-ark.component.html',
  styleUrls: ['./map-ark.component.css']
})
export class MapArkComponent implements OnInit, OnDestroy {

  isDev = !environment.production;

  constructor(public el: ElementRef) {}
  get isIE() {
    // return true;
    return untils().IE() > 10;
  }

  get hasArk() {
    return detectPlugin();
  }


  ngOnInit() {
    check();
  }
  ngOnDestroy() {
    untils().ArkMap().UnInitialize();
  }
}

const detectPlugin = function () {
  const pluginDiv = $(`<div id=" pluginDiv " style=" display: none "></div>`).appendTo(document.body);
  // tslint:disable-next-line:max-line-length
  pluginDiv.html(`<object style="position:relative" id="testArkObj" type="application/x-itst-activex" classid="CLSID:0BCAF84B-7570-4A96-9528-542A77E6606A">
    <param name="_Version" value="65536">
    <param name="_ExtentX" value="13229">
    <param name="_ExtentY" value="13229">
    <param name="_StockProps" value="0">
  </object>`);
  try {
    if (document.all['testArkObj'].object === undefined) {
      pluginDiv.remove(); // 删除pluginDiv及其所有的子元素
      return false;
    } else {
      pluginDiv.remove(); // 删除pluginDiv及其所有的子元素
      return true;
    }
  } catch (e) {
    return false;
  }
};

const check = function () {
  if (detectPlugin()) {
    console.log('该控件已经安装');
  } else {
    console.log('该控件未安装');
  }
};
