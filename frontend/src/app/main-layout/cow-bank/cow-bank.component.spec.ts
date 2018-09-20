import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowBankComponent } from './cow-bank.component';

describe('CowBankComponent', () => {
  let component: CowBankComponent;
  let fixture: ComponentFixture<CowBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
