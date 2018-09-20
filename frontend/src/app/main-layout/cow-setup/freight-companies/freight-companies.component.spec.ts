import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightCompaniesComponent } from './freight-companies.component';

describe('FreightCompaniesComponent', () => {
  let component: FreightCompaniesComponent;
  let fixture: ComponentFixture<FreightCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
