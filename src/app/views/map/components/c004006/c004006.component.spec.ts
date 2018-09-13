/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C004006Component } from './c004006.component';

describe('C004006Component', () => {
  let component: C004006Component;
  let fixture: ComponentFixture<C004006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C004006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C004006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
