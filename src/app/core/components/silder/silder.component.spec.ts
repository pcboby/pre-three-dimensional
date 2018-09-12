/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SilderComponent } from './silder.component';

describe('SilderComponent', () => {
  let component: SilderComponent;
  let fixture: ComponentFixture<SilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
