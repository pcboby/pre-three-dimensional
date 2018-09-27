/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoamingPathComponent } from './roaming-path.component';

describe('RoamingPathComponent', () => {
  let component: RoamingPathComponent;
  let fixture: ComponentFixture<RoamingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoamingPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoamingPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
