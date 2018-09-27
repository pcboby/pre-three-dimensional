/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystemOrgComponent } from './system-org.component';

describe('SystemOrgComponent', () => {
  let component: SystemOrgComponent;
  let fixture: ComponentFixture<SystemOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
