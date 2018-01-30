import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClComponent } from './liste-cl.component';

describe('ListeClComponent', () => {
  let component: ListeClComponent;
  let fixture: ComponentFixture<ListeClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
