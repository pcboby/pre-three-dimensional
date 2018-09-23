import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy
} from '@angular/core';

import * as _ from 'lodash';
import untils from '../../../config/untils';
import { environment } from '../../../../environments/environment';

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
  ngOnInit() {}
  ngOnDestroy() {
    untils().ArkMap().UnInitialize();
  }
}
