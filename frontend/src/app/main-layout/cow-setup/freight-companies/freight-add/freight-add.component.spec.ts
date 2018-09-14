import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightAddComponent } from './freight-add.component';

describe('FreightAddComponent', () => {
  let component: FreightAddComponent;
  let fixture: ComponentFixture<FreightAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
