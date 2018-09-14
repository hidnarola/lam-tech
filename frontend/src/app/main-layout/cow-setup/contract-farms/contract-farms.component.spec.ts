import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFarmsComponent } from './contract-farms.component';

describe('ContractFarmsComponent', () => {
  let component: ContractFarmsComponent;
  let fixture: ComponentFixture<ContractFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
