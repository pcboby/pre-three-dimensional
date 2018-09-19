/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionAnalyzeComponent } from './section-analyze.component';

describe('SectionAnalyzeComponent', () => {
  let component: SectionAnalyzeComponent;
  let fixture: ComponentFixture<SectionAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
