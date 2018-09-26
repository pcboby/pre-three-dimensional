

import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import {
  ControlsComponent,
  // C001001Component,
  // C001002Component,
  // C001003Component,
  // C002001Component,
  // C002002Component,
  // C003001Component,
  // C003002Component,
  // C004001Component,
  // C004002Component,
  // C004003Component,
  // C004004Component,
  // C004005Component,
  // C004006Component,
  // C004007Component,
  // C004008Component,
  // C005001Component,
  // C005002Component,
  ModelManagementComponent,
  ObliqueManagementComponent,
  RenderModeComponent,
  ThemeManagementComponent,
  AttributeQueryComponent,
  ClickQueryComponent,
  // AngleCalculateComponent,
  // AreaCalculateComponent,
  // BufferAnalyzeComponent,
  // CoordinateCalculateComponent,
  // DistanceCalculateComponent,
  // FillDigAnalyzeComponent,
  // HeightCalculateComponent,
  // OverlayAnalyzeComponent,
  // SectionAnalyzeComponent,
  // SlopeAnalyzeComponent,
  // TerrainAreaCalculateComponent,
  // TerrainDistanceCalculateComponent,
  // VisualAnalyzeComponent,
  // WaterAnalyzeComponent,
  AnalyzeManagementComponent,
  CalculateToolsComponent,
  LabelPanComponent,
  ThreeDimensionalPanComponent,
  FloodDeductionComponent,
  SubmergenceAnalysisComponent
} from './components';
import {
  MapRouting
} from './map.routing';
import {
  CoreModule
} from './../../core/core.module';
import {
  NgModule
} from '@angular/core';
import {
  MapComponent
} from './map.component';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
const controlComponents = [
  ControlsComponent,
  // C001001Component,
  // C001002Component,
  // C001003Component,
  // C002001Component,
  // C002002Component,
  // C003001Component,
  // C003002Component,
  // C004001Component,
  // C004002Component,
  // C004003Component,
  // C004004Component,
  // C004005Component,
  // C004006Component,
  // C004007Component,
  // C004008Component,
  // C005001Component,
  // C005002Component,
  ModelManagementComponent,
  ObliqueManagementComponent,
  RenderModeComponent,
  ThemeManagementComponent,
  AttributeQueryComponent,
  ClickQueryComponent,
  // AngleCalculateComponent,
  // AreaCalculateComponent,
  // BufferAnalyzeComponent,
  // CoordinateCalculateComponent,
  // DistanceCalculateComponent,
  // FillDigAnalyzeComponent,
  // HeightCalculateComponent,
  // OverlayAnalyzeComponent,
  // SectionAnalyzeComponent,
  // SlopeAnalyzeComponent,
  // TerrainAreaCalculateComponent,
  // TerrainDistanceCalculateComponent,
  // VisualAnalyzeComponent,
  // WaterAnalyzeComponent,
  AnalyzeManagementComponent,
  CalculateToolsComponent,
  LabelPanComponent,
  ThreeDimensionalPanComponent,
  FloodDeductionComponent,
  SubmergenceAnalysisComponent
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MapRouting,
    CoreModule,
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    Ng2Charts
  ],
  declarations: [MapComponent, ...controlComponents]
})
export class MapModule {}
