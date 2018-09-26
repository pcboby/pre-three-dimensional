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
  selector: 'app-theme-management',
  templateUrl: './theme-management.component.html',
  styleUrls: ['./theme-management.component.css']
})
export class ThemeManagementComponent implements OnInit {


  // expandKeys = ['1001', '10001'];
  checkedKeys = [];
  // // selectedKeys = ['10001', '100011'];
  // expandDefault = false;
  nodes = [];

  mouseAction(name: string, event: NzFormatEmitEvent): void {
    console.log(name, event);
    if (name === 'dblclick') {
      if (event.node.children.length === 0) { // 只对叶节点响应
        untils().ArkMap().vectorTreeOnDblClick(event.node.key);
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
      // console.log(mynode.isChecked,mynode.key)
      this.checkRespose(mynode.key, mynode.isChecked);

    }
  }

  checkRespose(nodeID: string, isChecked: boolean): void {
    // return;
    untils().ArkMap().vectorTreeOnCheck(isChecked, nodeID);
  }

  constructor() {}

  ngOnInit() {
    this.nodes = [new NzTreeNode(untils().ArkMap().getVectorTreeData())];
    // var originalVectorNodes = untils().ArkMap().getVectorTreeData();
    // // console.log(this.nodes)
    // // console.log('origi',originalVectorNodes[0].nodes)
    // if( originalVectorNodes.length>0)
    // {
    //   // alert('初始化矢量数据')

    //   this.nodes = [new NzTreeNode(originalVectorNodes[0].nodes[0])];
    //   this.checkedKeys =originalVectorNodes[0].checkedKeys;
    // }
    // // console.log('orignal',originalObpNodes)
  }

}
