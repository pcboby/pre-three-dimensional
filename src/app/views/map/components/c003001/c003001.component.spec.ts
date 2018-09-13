/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C003001Component } from './c003001.component';

describe('C003001Component', () => {
  let component: C003001Component;
  let fixture: ComponentFixture<C003001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C003001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C003001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
