import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresDivisionComponent } from './procedures-division.component';

describe('ProceduresDivisionComponent', () => {
  let component: ProceduresDivisionComponent;
  let fixture: ComponentFixture<ProceduresDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduresDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduresDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
