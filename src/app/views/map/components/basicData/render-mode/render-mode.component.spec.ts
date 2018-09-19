/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenderModeComponent } from './render-mode.component';

describe('RenderModeComponent', () => {
  let component: RenderModeComponent;
  let fixture: ComponentFixture<RenderModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
