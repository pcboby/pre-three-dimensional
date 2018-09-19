/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThreeDimensionalPanComponent } from './three-dimensional-pan.component';

describe('ThreeDimensionalPanComponent', () => {
  let component: ThreeDimensionalPanComponent;
  let fixture: ComponentFixture<ThreeDimensionalPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
