import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalWelfareComponent } from './animal-welfare.component';

describe('AnimalWelfareComponent', () => {
  let component: AnimalWelfareComponent;
  let fixture: ComponentFixture<AnimalWelfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalWelfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
