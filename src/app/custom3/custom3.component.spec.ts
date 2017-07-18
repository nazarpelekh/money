/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Custom3Component } from './custom3.component';

describe('Custom3Component', () => {
  let component: Custom3Component;
  let fixture: ComponentFixture<Custom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Custom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Custom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
