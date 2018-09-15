import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentByAnimalComponent } from './document-by-animal.component';

describe('DocumentByAnimalComponent', () => {
  let component: DocumentByAnimalComponent;
  let fixture: ComponentFixture<DocumentByAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentByAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentByAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
