import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleDeathListComponent } from './cattle-death-list.component';

describe('CattleDeathListComponent', () => {
  let component: CattleDeathListComponent;
  let fixture: ComponentFixture<CattleDeathListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleDeathListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleDeathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
