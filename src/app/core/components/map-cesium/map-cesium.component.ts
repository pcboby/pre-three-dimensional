import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map-cesium',
  templateUrl: './map-cesium.component.html',
  styleUrls: ['./map-cesium.component.css']
})
export class MapCesiumComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement.querySelector('.cesium'));
  }

}
