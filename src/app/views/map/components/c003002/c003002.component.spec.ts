/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C003002Component } from './c003002.component';

describe('C003002Component', () => {
  let component: C003002Component;
  let fixture: ComponentFixture<C003002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C003002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C003002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
