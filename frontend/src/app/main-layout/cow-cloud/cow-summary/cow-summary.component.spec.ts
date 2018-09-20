import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowSummaryComponent } from './cow-summary.component';

describe('CowSummaryComponent', () => {
  let component: CowSummaryComponent;
  let fixture: ComponentFixture<CowSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
