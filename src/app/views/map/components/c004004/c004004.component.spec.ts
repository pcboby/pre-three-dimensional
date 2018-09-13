/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004004Component } from './c004004.component';

describe('C004004Component', () => {
  let component: C004004Component;
  let fixture: ComponentFixture<C004004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
