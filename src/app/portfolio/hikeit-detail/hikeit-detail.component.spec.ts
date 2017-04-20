import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeitDetailComponent } from './hikeit-detail.component';

describe('HikeitDetailComponent', () => {
  let component: HikeitDetailComponent;
  let fixture: ComponentFixture<HikeitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
