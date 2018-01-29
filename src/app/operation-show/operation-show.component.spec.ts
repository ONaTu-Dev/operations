import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationShowComponent } from './operation-show.component';

describe('OperationShowComponent', () => {
  let component: OperationShowComponent;
  let fixture: ComponentFixture<OperationShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
