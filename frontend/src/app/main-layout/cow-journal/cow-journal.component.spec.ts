import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowJournalComponent } from './cow-journal.component';

describe('CowJournalComponent', () => {
  let component: CowJournalComponent;
  let fixture: ComponentFixture<CowJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
