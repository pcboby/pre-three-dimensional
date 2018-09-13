/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C005002Component } from './c005002.component';

describe('C005002Component', () => {
  let component: C005002Component;
  let fixture: ComponentFixture<C005002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C005002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C005002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
