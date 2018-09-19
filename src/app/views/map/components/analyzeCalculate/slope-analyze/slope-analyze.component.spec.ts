/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlopeAnalyzeComponent } from './slope-analyze.component';

describe('SlopeAnalyzeComponent', () => {
  let component: SlopeAnalyzeComponent;
  let fixture: ComponentFixture<SlopeAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlopeAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlopeAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
