import {
  Component,
  OnInit
} from '@angular/core';
import {
  NzFormatEmitEvent,
  NzTreeNode
} from 'ng-zorro-antd';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-oblique-management',
  templateUrl: './oblique-management.component.html',
  styleUrls: ['./oblique-management.component.css']
})
export class ObliqueManagementComponent implements OnInit {

  // expandKeys = ['1001', '10001'];
  checkedKeys = [];
  // selectedKeys = ['10001', '100011'];
  expandDefault = false;
  nodes = [];

  mouseAction(name: string, event: NzFormatEmitEvent): void {
    console.log(name, event);
    if (name === 'dblclick') {
      if (event.node.children.length === 0) { // 只对叶节点响应
        untils().ArkMap().obPTreeOnCheck(event.node.key);
      }
    }
  }
  checkAction(event: NzFormatEmitEvent): void { // check响应

    this.loopCheckAndResponse(event.node);

  }
  loopCheckAndResponse(mynode: NzTreeNode): void {
    console.log(mynode);

    if (mynode.children.length > 0) {
      for (let i = 0; i < mynode.children.length; i++) {
        this.loopCheckAndResponse(mynode.children[i]);
        // alert(mynode.children[i].isChecked)
      }

    } else {
      console.log(mynode.isChecked, mynode.key);
      this.checkRespose(mynode.key, mynode.isChecked);

    }
  }

  checkRespose(nodeID: string, isChecked: boolean): void {
    // return;
    untils().ArkMap().obPTreeOnCheck(isChecked, nodeID);
  }

  constructor() {}

  ngOnInit() {
    this.nodes.push(new NzTreeNode(untils().ArkMap().getObPhotoTreeData()));
    // var originalObpNodes = untils().ArkMap().getObPhotoTreeData();
    // console.log(originalObpNodes)
    // for(var i=0; i<originalObpNodes.length; i++)
    // {
    //   // alert('初始化倾斜数据')
    //   this.nodes = [new NzTreeNode(originalObpNodes[0].nodes[0])];
    //   this.checkedKeys = originalObpNodes[0].checkedKeys;


    // }
    // // console.log('orignal',originalObpNodes)
  }

}
