/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C001001Component } from './c001001.component';

describe('C001001Component', () => {
  let component: C001001Component;
  let fixture: ComponentFixture<C001001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C001001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C001001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
