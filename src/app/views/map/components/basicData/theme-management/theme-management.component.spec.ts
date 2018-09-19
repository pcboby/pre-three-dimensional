/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThemeManagementComponent } from './theme-management.component';

describe('ThemeManagementComponent', () => {
  let component: ThemeManagementComponent;
  let fixture: ComponentFixture<ThemeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
