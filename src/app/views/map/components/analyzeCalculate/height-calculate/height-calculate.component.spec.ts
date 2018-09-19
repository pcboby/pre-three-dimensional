/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeightCalculateComponent } from './height-calculate.component';

describe('HeightCalculateComponent', () => {
  let component: HeightCalculateComponent;
  let fixture: ComponentFixture<HeightCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
