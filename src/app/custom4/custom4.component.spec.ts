/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Custom4Component } from './custom4.component';

describe('Custom4Component', () => {
  let component: Custom4Component;
  let fixture: ComponentFixture<Custom4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Custom4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Custom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
