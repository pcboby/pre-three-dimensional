/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClickQueryComponent } from './click-query.component';

describe('ClickQueryComponent', () => {
  let component: ClickQueryComponent;
  let fixture: ComponentFixture<ClickQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
