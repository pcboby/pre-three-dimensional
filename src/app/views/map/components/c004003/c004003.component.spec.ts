/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004003Component } from './c004003.component';

describe('C004003Component', () => {
  let component: C004003Component;
  let fixture: ComponentFixture<C004003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
