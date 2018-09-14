import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c002001',
  templateUrl: './c002001.component.html',
  styleUrls: ['./c002001.component.css']
})
export class C002001Component implements OnInit {
  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }];
  constructor() { }

  ngOnInit() {
  }

}
