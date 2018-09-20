import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalManagementComponent } from './environmental-management.component';

describe('EnvironmentalManagementComponent', () => {
  let component: EnvironmentalManagementComponent;
  let fixture: ComponentFixture<EnvironmentalManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
