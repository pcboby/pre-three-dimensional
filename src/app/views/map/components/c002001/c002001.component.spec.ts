/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C002001Component } from './c002001.component';

describe('C002001Component', () => {
  let component: C002001Component;
  let fixture: ComponentFixture<C002001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C002001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C002001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
