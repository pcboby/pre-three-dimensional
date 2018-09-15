/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapFlashComponent } from './map-flash.component';

describe('MapFlashComponent', () => {
  let component: MapFlashComponent;
  let fixture: ComponentFixture<MapFlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFlashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
