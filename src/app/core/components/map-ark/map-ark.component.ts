import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import * as $ from 'jquery';

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

    // setTimeout(() => {
    //   // tslint:disable-next-line:max-line-length
    //   this.Initialize();
    // }, 1000);
    console.log($('iframe'));
  }

  Initialize() {
    const el = window.frames['_iframe'].document.getElementById('#ArkObj');
    const url = 'http://192.168.31.47:8081/assets/Data/Terrains/ChongQing.arkpro';
    console.log(el);
    // el['Initialize']('http://192.168.31.47:8081/assets/Data/Terrains/ChongQing.arkpro');

  }
}
