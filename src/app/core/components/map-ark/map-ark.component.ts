import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import * as $ from 'jquery';
import * as _ from 'lodash';

@Component({
  selector: 'app-map-ark',
  templateUrl: './map-ark.component.html',
  styleUrls: ['./map-ark.component.css']
})
export class MapArkComponent implements OnInit {
  constructor(public el: ElementRef) {

  }

  ngOnInit() {
    // 此方法OK
    // setTimeout(() => {
    //   document.querySelector('#ArkObj')['Initialize']('http://192.168.31.47:8081/assets/Data/Terrains/ChongQing.arkpro');
    // }, 0);

    console.log($('iframe'));
  }
}
