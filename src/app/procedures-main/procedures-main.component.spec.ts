import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresMainComponent } from './procedures-main.component';

describe('ProceduresMainComponent', () => {
  let component: ProceduresMainComponent;
  let fixture: ComponentFixture<ProceduresMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduresMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduresMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
