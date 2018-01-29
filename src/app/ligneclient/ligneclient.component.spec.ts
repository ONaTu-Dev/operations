import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneclientComponent } from './ligneclient.component';

describe('LigneclientComponent', () => {
  let component: LigneclientComponent;
  let fixture: ComponentFixture<LigneclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
