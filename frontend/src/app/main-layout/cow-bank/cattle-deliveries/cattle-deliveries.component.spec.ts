import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleDeliveriesComponent } from './cattle-deliveries.component';

describe('CattleDeliveriesComponent', () => {
  let component: CattleDeliveriesComponent;
  let fixture: ComponentFixture<CattleDeliveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleDeliveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
