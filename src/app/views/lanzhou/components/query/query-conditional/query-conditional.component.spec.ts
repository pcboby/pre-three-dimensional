/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryConditionalComponent } from './query-conditional.component';

describe('QueryConditionalComponent', () => {
  let component: QueryConditionalComponent;
  let fixture: ComponentFixture<QueryConditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryConditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
