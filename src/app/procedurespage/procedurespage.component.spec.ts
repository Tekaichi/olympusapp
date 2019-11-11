import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedurespageComponent } from './procedurespage.component';

describe('ProcedurespageComponent', () => {
  let component: ProcedurespageComponent;
  let fixture: ComponentFixture<ProcedurespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
