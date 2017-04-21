import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherlyMaplyComponent } from './weatherly-maply.component';

describe('WeatherlyMaplyComponent', () => {
  let component: WeatherlyMaplyComponent;
  let fixture: ComponentFixture<WeatherlyMaplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherlyMaplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherlyMaplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
