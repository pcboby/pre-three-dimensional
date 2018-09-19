/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngleCalculateComponent } from './angle-calculate.component';

describe('AngleCalculateComponent', () => {
  let component: AngleCalculateComponent;
  let fixture: ComponentFixture<AngleCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
