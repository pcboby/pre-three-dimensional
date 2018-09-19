/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DistanceCalculateComponent } from './distance-calculate.component';

describe('DistanceCalculateComponent', () => {
  let component: DistanceCalculateComponent;
  let fixture: ComponentFixture<DistanceCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
