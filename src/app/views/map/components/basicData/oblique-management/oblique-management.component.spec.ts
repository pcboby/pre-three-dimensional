/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObliqueManagementComponent } from './oblique-management.component';

describe('ObliqueManagementComponent', () => {
  let component: ObliqueManagementComponent;
  let fixture: ComponentFixture<ObliqueManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObliqueManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObliqueManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
