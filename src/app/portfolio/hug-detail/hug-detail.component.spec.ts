import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HugDetailComponent } from './hug-detail.component';

describe('HugDetailComponent', () => {
  let component: HugDetailComponent;
  let fixture: ComponentFixture<HugDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HugDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HugDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
