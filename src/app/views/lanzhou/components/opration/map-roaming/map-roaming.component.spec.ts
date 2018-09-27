/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapRoamingComponent } from './map-roaming.component';

describe('MapRoamingComponent', () => {
  let component: MapRoamingComponent;
  let fixture: ComponentFixture<MapRoamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRoamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRoamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
