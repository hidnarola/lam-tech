import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingLayoutComponent } from './lending-layout.component';

describe('LendingLayoutComponent', () => {
  let component: LendingLayoutComponent;
  let fixture: ComponentFixture<LendingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
