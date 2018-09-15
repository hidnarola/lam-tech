import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestockPositionComponent } from './livestock-position.component';

describe('LivestockPositionComponent', () => {
  let component: LivestockPositionComponent;
  let fixture: ComponentFixture<LivestockPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestockPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestockPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
