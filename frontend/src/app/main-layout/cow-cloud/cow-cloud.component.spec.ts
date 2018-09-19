import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowCloudComponent } from './cow-cloud.component';

describe('CowCloudComponent', () => {
  let component: CowCloudComponent;
  let fixture: ComponentFixture<CowCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
