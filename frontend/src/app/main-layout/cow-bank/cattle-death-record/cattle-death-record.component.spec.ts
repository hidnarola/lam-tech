import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleDeathRecordComponent } from './cattle-death-record.component';

describe('CattleDeathRecordComponent', () => {
  let component: CattleDeathRecordComponent;
  let fixture: ComponentFixture<CattleDeathRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleDeathRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleDeathRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
