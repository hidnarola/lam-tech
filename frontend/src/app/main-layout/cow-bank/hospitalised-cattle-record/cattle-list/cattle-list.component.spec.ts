import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleListComponent } from './cattle-list.component';

describe('CattleListComponent', () => {
  let component: CattleListComponent;
  let fixture: ComponentFixture<CattleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
