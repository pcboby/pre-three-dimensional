/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004008Component } from './c004008.component';

describe('C004008Component', () => {
  let component: C004008Component;
  let fixture: ComponentFixture<C004008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
