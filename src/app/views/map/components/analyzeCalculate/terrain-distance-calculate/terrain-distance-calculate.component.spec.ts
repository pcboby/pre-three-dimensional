/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TerrainDistanceCalculateComponent } from './terrain-distance-calculate.component';

describe('TerrainDistanceCalculateComponent', () => {
  let component: TerrainDistanceCalculateComponent;
  let fixture: ComponentFixture<TerrainDistanceCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainDistanceCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDistanceCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
