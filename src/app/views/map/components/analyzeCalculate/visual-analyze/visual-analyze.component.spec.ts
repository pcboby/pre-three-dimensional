/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisualAnalyzeComponent } from './visual-analyze.component';

describe('VisualAnalyzeComponent', () => {
  let component: VisualAnalyzeComponent;
  let fixture: ComponentFixture<VisualAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
