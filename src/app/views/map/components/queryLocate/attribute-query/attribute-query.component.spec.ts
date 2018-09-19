/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AttributeQueryComponent } from './attribute-query.component';

describe('AttributeQueryComponent', () => {
  let component: AttributeQueryComponent;
  let fixture: ComponentFixture<AttributeQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
