import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredFarmsComponent } from './registered-farms.component';

describe('RegisteredFarmsComponent', () => {
  let component: RegisteredFarmsComponent;
  let fixture: ComponentFixture<RegisteredFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
