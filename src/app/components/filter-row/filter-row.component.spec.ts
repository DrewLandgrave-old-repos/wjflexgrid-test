/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterRowComponent } from './filter-row.component';

describe('FilterRowComponent', () => {
  let component: FilterRowComponent;
  let fixture: ComponentFixture<FilterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
