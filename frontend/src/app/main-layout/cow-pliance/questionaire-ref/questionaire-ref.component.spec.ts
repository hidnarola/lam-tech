import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireRefComponent } from './questionaire-ref.component';

describe('QuestionaireRefComponent', () => {
  let component: QuestionaireRefComponent;
  let fixture: ComponentFixture<QuestionaireRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaireRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
