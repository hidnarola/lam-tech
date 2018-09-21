import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowMunicatorComponent } from './cow-municator.component';

describe('CowMunicatorComponent', () => {
  let component: CowMunicatorComponent;
  let fixture: ComponentFixture<CowMunicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowMunicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowMunicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
