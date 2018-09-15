import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInstructionComponent } from './purchase-instruction.component';

describe('PurchaseInstructionComponent', () => {
  let component: PurchaseInstructionComponent;
  let fixture: ComponentFixture<PurchaseInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
