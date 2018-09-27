/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryClickComponent } from './query-click.component';

describe('QueryClickComponent', () => {
  let component: QueryClickComponent;
  let fixture: ComponentFixture<QueryClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
