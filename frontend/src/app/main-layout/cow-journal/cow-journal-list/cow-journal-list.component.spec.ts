import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowJournalListComponent } from './cow-journal-list.component';

describe('CowJournalListComponent', () => {
  let component: CowJournalListComponent;
  let fixture: ComponentFixture<CowJournalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowJournalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowJournalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
