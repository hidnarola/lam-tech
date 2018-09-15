import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowRecordComponent } from './cow-record.component';

describe('CowRecordComponent', () => {
  let component: CowRecordComponent;
  let fixture: ComponentFixture<CowRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
