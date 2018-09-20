import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturePracticesComponent } from './agriculture-practices.component';

describe('AgriculturePracticesComponent', () => {
  let component: AgriculturePracticesComponent;
  let fixture: ComponentFixture<AgriculturePracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturePracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturePracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
