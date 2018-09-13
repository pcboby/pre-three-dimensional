/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004005Component } from './c004005.component';

describe('C004005Component', () => {
  let component: C004005Component;
  let fixture: ComponentFixture<C004005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
