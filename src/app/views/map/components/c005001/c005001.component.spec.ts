/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C005001Component } from './c005001.component';

describe('C005001Component', () => {
  let component: C005001Component;
  let fixture: ComponentFixture<C005001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C005001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C005001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
