import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c001001',
  templateUrl: './c001001.component.html',
  styleUrls: ['./c001001.component.css']
})
export class C001001Component implements OnInit {

  data: any = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1',
      }, {
        label: '三级 1-1-2',
      }, {
        label: '三级 1-1-3',
      }, {
        label: '三级 1-1-4',
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
    }]
  }, {
    label: '一级 3',
  }];
  constructor() { }

  ngOnInit() {
  }

}
