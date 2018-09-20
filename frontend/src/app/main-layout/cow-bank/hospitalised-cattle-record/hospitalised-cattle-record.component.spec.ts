import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalisedCattleRecordComponent } from './hospitalised-cattle-record.component';

describe('HospitalisedCattleRecordComponent', () => {
  let component: HospitalisedCattleRecordComponent;
  let fixture: ComponentFixture<HospitalisedCattleRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalisedCattleRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalisedCattleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
