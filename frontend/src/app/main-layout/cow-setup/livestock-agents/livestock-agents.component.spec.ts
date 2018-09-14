import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestockAgentsComponent } from './livestock-agents.component';

describe('LivestockAgentsComponent', () => {
  let component: LivestockAgentsComponent;
  let fixture: ComponentFixture<LivestockAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestockAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestockAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
