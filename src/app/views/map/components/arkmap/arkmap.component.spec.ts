/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArkmapComponent } from './arkmap.component';

describe('ArkmapComponent', () => {
  let component: ArkmapComponent;
  let fixture: ComponentFixture<ArkmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArkmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArkmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
