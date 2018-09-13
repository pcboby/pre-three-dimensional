/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C001002Component } from './c001002.component';

describe('C001002Component', () => {
  let component: C001002Component;
  let fixture: ComponentFixture<C001002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C001002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C001002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
