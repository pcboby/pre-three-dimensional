import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c002001',
  templateUrl: './c002001.component.html',
  styleUrls: ['./c002001.component.css']
})
export class C002001Component implements OnInit {
  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
