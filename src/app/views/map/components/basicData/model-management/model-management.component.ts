import {
  Component,
  OnInit
} from '@angular/core';
import {
  NzFormatEmitEvent,
  NzTreeNode,
  NzTreeNodeOptions
} from 'ng-zorro-antd';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-model-management',
  templateUrl: './model-management.component.html',
  styleUrls: ['./model-management.component.css']
})
export class ModelManagementComponent implements OnInit {

  // expandKeys = ['1001', '10001'];
  checkedKeys = [];
  // selectedKeys = ['10001', '100011'];
  expandDefault = false;
  nodes = [];

    //  [new NzTreeNode({
    //   title: '模型数据',
    //   key: '001',
    //   children: []
    // })];

    mouseAction(name: string, event: NzFormatEmitEvent): void {
      console.log(name, event);
      if (name === 'dblclick') {
        // 只对叶节点响应
        if (event.node.children.length === 0) {
          untils().ArkMap().fixedModelTreeOnDblClick(event.node.key);
          // alert(name)
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
      untils().ArkMap().fixedModelTreeOnCheck(isChecked, nodeID);
    }

    constructor() {
      // console.log('orignal',originalFixedModelNodes)
    }

    ngOnInit() {
      this.nodes.push(new NzTreeNode(untils().ArkMap().getFixedModelTreeData()));
      // this.checkedKeys = treeData.checkedKeys;
      // console.log('!@!@!@!@::::::', untils().ArkMap().getFixedModelTreeData());
      // untils().ArkMap().getFixedModelTreeData().forEach((item,idx) => {
      //   this.nodes[0].children.push({
      //     id:idx,
      //     key:'',
      //     title:''
      //   });
      // });

      // for (let i = 0; i < originalFixedModelNodes.length; i++) {
      //   this.nodes = [new NzTreeNode(originalFixedModelNodes[0].nodes[0])];
      //   this.checkedKeys = originalFixedModelNodes[0].checkedKeys;
      //   // alert('初始化倾斜数据')

      // }
    }

  }
