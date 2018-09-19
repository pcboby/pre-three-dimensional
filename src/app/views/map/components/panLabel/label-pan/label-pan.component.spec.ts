/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabelPanComponent } from './label-pan.component';

describe('LabelPanComponent', () => {
  let component: LabelPanComponent;
  let fixture: ComponentFixture<LabelPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
