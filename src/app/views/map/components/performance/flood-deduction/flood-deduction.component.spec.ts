/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FloodDeductionComponent } from './flood-deduction.component';

describe('FloodDeductionComponent', () => {
  let component: FloodDeductionComponent;
  let fixture: ComponentFixture<FloodDeductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
