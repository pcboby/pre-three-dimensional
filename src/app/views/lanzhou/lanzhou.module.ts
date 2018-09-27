
import {
  ControlsComponent,
  AnalysisConnectivityComponent,
  AnalysisCrossComponent,
  AnalysisDepthComponent,
  AnalysisFlowComponent,
  AnalysisHorizontalComponent,
  AnalysisPipelineComponent,
  AnalysisTracingComponent,
  AnalysisTubeComponent,
  AnalysisVerticalComponent,
  AnalysisVisibilityComponent,
  InformationComponent,
  LayerBaseComponent,
  LayerModelComponent,
  LayerPipelineComponent,
  LocationCoordinateComponent,
  LocationPlaceComponent,
  LocationRoadComponent,
  AreaMeasurementComponent,
  CoordinateMeasurementComponent,
  DistanceMeasurementComponent,
  MapRoamingComponent,
  RoamingPathComponent,
  TaggingClearComponent,
  TaggingPointComponent,
  QueryAppendagesComponent,
  QueryClickComponent,
  QueryConditionalComponent,
  QueryMaterialComponent,
  QueryPipeComponent,
  QuerySpatialComponent,
  StatisticsAppendageComponent,
  StatisticsClassComponent,
  StatisticsCountComponent,
  StatisticsLengthComponent,
  StatisticsPiecewiseComponent,
  ThematicOutputComponent,
  ThematicPrintingComponent,
  SystemOrgComponent,
  SystemLogComponent
} from './components';
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  LanzhouComponent
} from './lanzhou.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  LanzhouRouting
} from '../lanzhou/lanzhou.routing';
import {
  CoreModule
} from '../../core/core.module';
import {
  NgZorroAntdModule
} from 'ng-zorro-antd';
import {
  ChartsModule as Ng2Charts
} from 'ng2-charts';

const controlComponents = [
  ControlsComponent,
  AnalysisConnectivityComponent,
  AnalysisCrossComponent,
  AnalysisDepthComponent,
  AnalysisFlowComponent,
  AnalysisHorizontalComponent,
  AnalysisPipelineComponent,
  AnalysisTracingComponent,
  AnalysisTubeComponent,
  AnalysisVerticalComponent,
  AnalysisVisibilityComponent,
  InformationComponent,
  LayerBaseComponent,
  LayerModelComponent,
  LayerPipelineComponent,
  LocationCoordinateComponent,
  LocationPlaceComponent,
  LocationRoadComponent,
  AreaMeasurementComponent,
  CoordinateMeasurementComponent,
  DistanceMeasurementComponent,
  MapRoamingComponent,
  RoamingPathComponent,
  TaggingClearComponent,
  TaggingPointComponent,
  QueryAppendagesComponent,
  QueryClickComponent,
  QueryConditionalComponent,
  QueryMaterialComponent,
  QueryPipeComponent,
  QuerySpatialComponent,
  StatisticsAppendageComponent,
  StatisticsClassComponent,
  StatisticsCountComponent,
  StatisticsLengthComponent,
  StatisticsPiecewiseComponent,
  ThematicOutputComponent,
  ThematicPrintingComponent,
  SystemOrgComponent,
  SystemLogComponent
];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LanzhouRouting,
    CoreModule,
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    Ng2Charts
  ],
  declarations: [LanzhouComponent, ...controlComponents]
})
export class LanzhouModule {}
