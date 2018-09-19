import {
  Component,
  OnInit
} from '@angular/core';
import {
  NzTreeNode,
  NzFormatEmitEvent
} from 'ng-zorro-antd';
import untils from '../../../../config/untils';
@Component({
  selector: 'app-c001001',
  templateUrl: './c001001.component.html',
  styleUrls: ['./c001001.component.css']
})
export class C001001Component implements OnInit {

  expandKeys = ['1001', '10001'];
  checkedKeys = ['100011', '1002'];
  selectedKeys = ['10001', '100011'];
  expandDefault = false;
  nodes = [
    new NzTreeNode({
      title: 'root1',
      key: '1001',
      children: [{
          title: 'child1',
          key: '10001',
          children: [{
              title: 'child1.1',
              key: '100011',
              isLeaf: true
            },
            {
              title: 'child1.2',
              key: '100012',
              isLeaf: true
            }
          ]
        },
        {
          title: 'child2',
          key: '10002',
          children: [{
              title: 'grandchild1.2.1',
              key: '1000121',
              isLeaf: true,
              disabled: true
            },
            {
              title: 'grandchild1.2.2',
              key: '1000122',
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
  constructor() {}

  ngOnInit() {}

  test() {
    console.log('do test');
    untils().ArkMap().test();
    console.log(untils().ArkMapRef());
    untils().tester();
  }
  test1() {
    console.log('do test1');
    untils().ArkMap().test1('111');
  }
  test2() {
    console.log('do test2');
    const val = untils().ArkMap().test2();
    console.log('@@@', val);
  }
  testX() {
    console.log('do test2');
    const val = untils().ArkMap().testX('张三');
    console.log('@@@', val);
  }

}
