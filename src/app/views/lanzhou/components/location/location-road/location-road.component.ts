import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-road',
  templateUrl: './location-road.component.html',
  styleUrls: ['./location-road.component.css']
})
export class LocationRoadComponent implements OnInit {
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
