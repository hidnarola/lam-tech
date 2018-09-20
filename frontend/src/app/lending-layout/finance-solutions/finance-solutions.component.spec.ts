import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSolutionsComponent } from './finance-solutions.component';

describe('FinanceSolutionsComponent', () => {
  let component: FinanceSolutionsComponent;
  let fixture: ComponentFixture<FinanceSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
