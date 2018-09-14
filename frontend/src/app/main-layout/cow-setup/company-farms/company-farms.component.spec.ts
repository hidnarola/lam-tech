import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFarmsComponent } from './company-farms.component';

describe('CompanyFarmsComponent', () => {
  let component: CompanyFarmsComponent;
  let fixture: ComponentFixture<CompanyFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
