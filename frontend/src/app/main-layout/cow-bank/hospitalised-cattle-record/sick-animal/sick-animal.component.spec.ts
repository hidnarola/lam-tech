import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SickAnimalComponent } from './sick-animal.component';

describe('SickAnimalComponent', () => {
  let component: SickAnimalComponent;
  let fixture: ComponentFixture<SickAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SickAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
