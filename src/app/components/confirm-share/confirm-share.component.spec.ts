import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmShareComponent } from './confirm-share.component';

describe('ConfirmShareComponent', () => {
  let component: ConfirmShareComponent;
  let fixture: ComponentFixture<ConfirmShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
