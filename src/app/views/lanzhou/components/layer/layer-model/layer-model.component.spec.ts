/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerModelComponent } from './layer-model.component';

describe('LayerModelComponent', () => {
  let component: LayerModelComponent;
  let fixture: ComponentFixture<LayerModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
