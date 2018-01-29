import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueclientComponent } from './vueclient.component';

describe('VueclientComponent', () => {
  let component: VueclientComponent;
  let fixture: ComponentFixture<VueclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
