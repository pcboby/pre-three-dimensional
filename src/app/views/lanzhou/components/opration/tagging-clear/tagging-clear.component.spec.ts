/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaggingClearComponent } from './tagging-clear.component';

describe('TaggingClearComponent', () => {
  let component: TaggingClearComponent;
  let fixture: ComponentFixture<TaggingClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaggingClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggingClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
