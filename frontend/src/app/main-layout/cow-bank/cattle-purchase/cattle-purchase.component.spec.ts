import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattlePurchaseComponent } from './cattle-purchase.component';

describe('CattlePurchaseComponent', () => {
  let component: CattlePurchaseComponent;
  let fixture: ComponentFixture<CattlePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattlePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattlePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
