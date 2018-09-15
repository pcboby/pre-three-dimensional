/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapArkComponent } from './map-ark.component';

describe('MapArkComponent', () => {
  let component: MapArkComponent;
  let fixture: ComponentFixture<MapArkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapArkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapArkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
