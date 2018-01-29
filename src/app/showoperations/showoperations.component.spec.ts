import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoperationsComponent } from './showoperations.component';

describe('ShowoperationsComponent', () => {
  let component: ShowoperationsComponent;
  let fixture: ComponentFixture<ShowoperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowoperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
