/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaggingPointComponent } from './tagging-point.component';

describe('TaggingPointComponent', () => {
  let component: TaggingPointComponent;
  let fixture: ComponentFixture<TaggingPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaggingPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
