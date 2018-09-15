import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowSetupComponent } from './cow-setup.component';

describe('CowSetupComponent', () => {
  let component: CowSetupComponent;
  let fixture: ComponentFixture<CowSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
