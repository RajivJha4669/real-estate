/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NearbyAreaComponent } from './nearby-area.component';

describe('NearbyAreaComponent', () => {
  let component: NearbyAreaComponent;
  let fixture: ComponentFixture<NearbyAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearbyAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
