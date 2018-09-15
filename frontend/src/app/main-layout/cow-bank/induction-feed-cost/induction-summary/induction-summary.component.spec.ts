import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionSummaryComponent } from './induction-summary.component';

describe('InductionSummaryComponent', () => {
  let component: InductionSummaryComponent;
  let fixture: ComponentFixture<InductionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
