import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemonialComponent } from './testemonial.component';

describe('TestemonialComponent', () => {
  let component: TestemonialComponent;
  let fixture: ComponentFixture<TestemonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestemonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestemonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
