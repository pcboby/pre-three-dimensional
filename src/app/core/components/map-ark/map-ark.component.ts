import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import * as _ from 'lodash';
import untils from '../../../config/untils';

@Component({
  selector: 'app-map-ark',
  templateUrl: './map-ark.component.html',
  styleUrls: ['./map-ark.component.css']
})
export class MapArkComponent implements OnInit {
  constructor(public el: ElementRef) {

  }
  get isIE() {
    return untils().IE() > 10;
  }
  ngOnInit() {}
}
