import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialManagementComponent } from './financial-management.component';

describe('FinancialManagementComponent', () => {
  let component: FinancialManagementComponent;
  let fixture: ComponentFixture<FinancialManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
