import {
  Component,
  OnInit
} from '@angular/core';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-three-dimensional-pan',
  templateUrl: './three-dimensional-pan.component.html',
  styleUrls: ['./three-dimensional-pan.component.css']
})
export class ThreeDimensionalPanComponent implements OnInit {

  viewMode = '';
  data = [];
  currentId = 0;
  constructor() {}

  ngOnInit() {
    untils().ArkMap().getNaviPathListData().forEach((item, idx) => {
      this.data.push({
        id: idx,
        title: item
      });

    });
    // const originalNaviPathNodes = ;
    // if ( originalNaviPathNodes.length>0) {
    //   console.log('originalNaviPathNodes', originalNaviPathNodes);
    // this.data = untils().ArkMap().getNaviPathListData() || [];
    // }
  }


  checkAction(id: number): void { // check响应
    this.currentId = id;

  }

  play() {
    this.viewMode = 'play';
    if (this.currentId >= 0) {
      untils().ArkMap().playNaviPath(this.currentId);
    }

  }
  pause() {
    this.viewMode = 'pause';
    if (this.currentId >= 0) {
      untils().ArkMap().PauseNaviPath(this.currentId);
    }
  }

  stop() {
    this.viewMode = 'stop';
    if (this.currentId >= 0) {
      untils().ArkMap().StopNaviPath(this.currentId);
    }


  }

}
