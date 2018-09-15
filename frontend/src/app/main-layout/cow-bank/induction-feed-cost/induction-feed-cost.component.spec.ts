import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionFeedCostComponent } from './induction-feed-cost.component';

describe('InductionFeedCostComponent', () => {
  let component: InductionFeedCostComponent;
  let fixture: ComponentFixture<InductionFeedCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionFeedCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionFeedCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
