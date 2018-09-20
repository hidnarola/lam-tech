import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowPlianceComponent } from './cow-pliance.component';

describe('CowPlianceComponent', () => {
  let component: CowPlianceComponent;
  let fixture: ComponentFixture<CowPlianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowPlianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowPlianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
