/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004007Component } from './c004007.component';

describe('C004007Component', () => {
  let component: C004007Component;
  let fixture: ComponentFixture<C004007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
