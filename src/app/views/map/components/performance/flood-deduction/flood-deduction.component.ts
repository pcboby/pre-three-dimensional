import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-flood-deduction',
  templateUrl: './flood-deduction.component.html',
  styleUrls: ['./flood-deduction.component.css']
})
export class FloodDeductionComponent implements OnInit, OnDestroy {


  public viewMode = '';
  public percent = 50;

  constructor() {}

  ngOnInit() {
    untils().ArkMap().River();
  }
  ngOnDestroy() {
    try {
      untils().ArkMap().stopPlay();
    } catch (error) {}
  }


  play() {
    this.viewMode = 'play';
    untils().ArkMap().continuePlay();
    console.log('初始化完成');
  }
  pause() {
    this.viewMode = 'pause';
    untils().ArkMap().PausePlay();
  }
  continue () {
    this.viewMode = 'play';
    untils().ArkMap().continuePlay();
  }
  stop() {
    this.viewMode = 'stop';
    untils().ArkMap().stopPlay();
  }



}
