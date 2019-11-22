import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduredeviceComponent } from './proceduredevice.component';

describe('ProceduredeviceComponent', () => {
  let component: ProceduredeviceComponent;
  let fixture: ComponentFixture<ProceduredeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduredeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduredeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
