import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import untils from '../../../../../config/untils';

@Component({
  selector: 'app-submergence-analysis',
  templateUrl: './submergence-analysis.component.html',
  styleUrls: ['./submergence-analysis.component.css']
})
export class SubmergenceAnalysisComponent implements OnInit, OnDestroy {

  public viewMode = '';
  public percent = 50;
  // untils().ArkMap().FloodProc_StepIt()

  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
    console.log('submergence-analysis exit~~~');
    try {
      untils().ArkMap().FloodProc_Close();

    } catch (error) {

    }
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
