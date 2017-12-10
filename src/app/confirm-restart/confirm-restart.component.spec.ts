import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRestartComponent } from './confirm-restart.component';

describe('ConfirmRestartComponent', () => {
  let component: ConfirmRestartComponent;
  let fixture: ComponentFixture<ConfirmRestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
