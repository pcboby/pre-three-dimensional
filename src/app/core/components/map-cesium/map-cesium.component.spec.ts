/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapCesiumComponent } from './map-cesium.component';

describe('MapCesiumComponent', () => {
  let component: MapCesiumComponent;
  let fixture: ComponentFixture<MapCesiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCesiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCesiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
