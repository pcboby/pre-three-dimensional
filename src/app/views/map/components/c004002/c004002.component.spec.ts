/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004002Component } from './c004002.component';

describe('C004002Component', () => {
  let component: C004002Component;
  let fixture: ComponentFixture<C004002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
