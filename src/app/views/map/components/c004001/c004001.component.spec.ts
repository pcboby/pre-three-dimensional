/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004001Component } from './c004001.component';

describe('C004001Component', () => {
  let component: C004001Component;
  let fixture: ComponentFixture<C004001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
