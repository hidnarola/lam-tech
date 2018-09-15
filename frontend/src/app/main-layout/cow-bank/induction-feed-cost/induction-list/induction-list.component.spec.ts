import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionListComponent } from './induction-list.component';

describe('InductionListComponent', () => {
  let component: InductionListComponent;
  let fixture: ComponentFixture<InductionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
