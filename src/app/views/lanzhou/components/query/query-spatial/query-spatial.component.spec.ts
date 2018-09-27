/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuerySpatialComponent } from './query-spatial.component';

describe('QuerySpatialComponent', () => {
  let component: QuerySpatialComponent;
  let fixture: ComponentFixture<QuerySpatialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerySpatialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySpatialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
