import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentReconciliationComponent } from './document-reconciliation.component';

describe('DocumentReconciliationComponent', () => {
  let component: DocumentReconciliationComponent;
  let fixture: ComponentFixture<DocumentReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
