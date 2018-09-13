/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C002002Component } from './c002002.component';

describe('C002002Component', () => {
  let component: C002002Component;
  let fixture: ComponentFixture<C002002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C002002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C002002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
