/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerBaseComponent } from './layer-base.component';

describe('LayerBaseComponent', () => {
  let component: LayerBaseComponent;
  let fixture: ComponentFixture<LayerBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
