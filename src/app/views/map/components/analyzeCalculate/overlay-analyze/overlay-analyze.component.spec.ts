/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OverlayAnalyzeComponent } from './overlay-analyze.component';

describe('OverlayAnalyzeComponent', () => {
  let component: OverlayAnalyzeComponent;
  let fixture: ComponentFixture<OverlayAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
