import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowJournalAddComponent } from './cow-journal-add.component';

describe('CowJournalAddComponent', () => {
  let component: CowJournalAddComponent;
  let fixture: ComponentFixture<CowJournalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowJournalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowJournalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
