import { Component, OnInit } from '@angular/core';
import { NzTreeNode, NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-c001001',
  templateUrl: './c001001.component.html',
  styleUrls: ['./c001001.component.css']
})
export class C001001Component implements OnInit {

  expandKeys = [ '1001', '10001' ];
  checkedKeys = [ '100011', '1002' ];
  selectedKeys = [ '10001', '100011' ];
  expandDefault = false;
  nodes = [
    new NzTreeNode({
      title   : 'root1',
      key     : '1001',
      children: [
        {
          title   : 'child1',
          key     : '10001',
          children: [
            {
              title : 'child1.1',
              key   : '100011',
              isLeaf: true
            },
            {
              title : 'child1.2',
              key   : '100012',
              isLeaf: true
            }
          ]
        },
        {
          title   : 'child2',
          key     : '10002',
          children: [
            {
              title   : 'grandchild1.2.1',
              key     : '1000121',
              isLeaf  : true,
              disabled: true
            },
            {
              title : 'grandchild1.2.2',
              key   : '1000122',
              isLeaf: true
            }
          ]
        }
      ]
    })
  ];

  mouseAction(name: string, event: NzFormatEmitEvent): void {
    console.log(name, event);
  }
  constructor() { }

  ngOnInit() {
  }

}
