/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C001003Component } from './c001003.component';

describe('C001003Component', () => {
  let component: C001003Component;
  let fixture: ComponentFixture<C001003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C001003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C001003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
