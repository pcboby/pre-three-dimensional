import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapperService } from '../../../../../core/services';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-flood-deduction',
  templateUrl: './flood-deduction.component.html',
  styleUrls: ['./flood-deduction.component.css']
})
export class FloodDeductionComponent implements OnInit, OnDestroy {

  public viewMode = '';
  public percent = 50;
  // untils().ArkMap().FloodProc_StepIt()

  constructor(private mapperService: MapperService) {}

  ngOnInit() {}
  ngOnDestroy() {
    untils().ArkMap().FloodProc_Close();
  }


  play() {
    this.viewMode = 'play';
    untils().ArkMap().FloodProc_Init();
    console.log('初始化完成');
  }
  pause() {
    this.viewMode = 'pause';
    untils().ArkMap().FloodProc_Pause();
  }
  continue () {
    this.viewMode = 'play';
    untils().ArkMap().FloodProc_ContinuePlay();
  }
  stop() {
    this.viewMode = 'stop';
    untils().ArkMap().FloodProc_stop();
  }


}
