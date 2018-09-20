import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowCloudListComponent } from './cow-cloud-list.component';

describe('CowCloudListComponent', () => {
  let component: CowCloudListComponent;
  let fixture: ComponentFixture<CowCloudListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowCloudListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowCloudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
