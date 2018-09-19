/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubmergenceAnalysisComponent } from './submergence-analysis.component';

describe('SubmergenceAnalysisComponent', () => {
  let component: SubmergenceAnalysisComponent;
  let fixture: ComponentFixture<SubmergenceAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmergenceAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmergenceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
