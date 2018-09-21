import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowMunicatorAddComponent } from './cow-municator-add.component';

describe('CowMunicatorAddComponent', () => {
  let component: CowMunicatorAddComponent;
  let fixture: ComponentFixture<CowMunicatorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowMunicatorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowMunicatorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
