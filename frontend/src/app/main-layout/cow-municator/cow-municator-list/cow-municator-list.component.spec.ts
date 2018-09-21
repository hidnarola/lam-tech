import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowMunicatorListComponent } from './cow-municator-list.component';

describe('CowMunicatorListComponent', () => {
  let component: CowMunicatorListComponent;
  let fixture: ComponentFixture<CowMunicatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowMunicatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowMunicatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
