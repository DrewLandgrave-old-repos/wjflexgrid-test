/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomModalComponent } from './room-modal.component';

describe('RoomModalComponent', () => {
  let component: RoomModalComponent;
  let fixture: ComponentFixture<RoomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
