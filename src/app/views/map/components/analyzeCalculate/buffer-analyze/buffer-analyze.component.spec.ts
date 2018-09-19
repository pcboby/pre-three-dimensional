/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BufferAnalyzeComponent } from './buffer-analyze.component';

describe('BufferAnalyzeComponent', () => {
  let component: BufferAnalyzeComponent;
  let fixture: ComponentFixture<BufferAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
