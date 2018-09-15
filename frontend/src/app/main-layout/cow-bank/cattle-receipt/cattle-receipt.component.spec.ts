import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleReceiptComponent } from './cattle-receipt.component';

describe('CattleReceiptComponent', () => {
  let component: CattleReceiptComponent;
  let fixture: ComponentFixture<CattleReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
